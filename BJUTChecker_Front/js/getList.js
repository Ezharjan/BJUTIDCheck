let mHeaders = [];
let mBody = [];

const params = {
    url: '',
    type: 'get',
    data: {},
    sCallback: function(res) {
        // console.log("Server said: ", res);
        // document.getElementById("template").innerHTML = res;


        const result = JSON.parse(res);
        // console.log(result.data.length);

        let headers = ['编号', '姓名', '学号'];
        let body = [];

        let countInfo = document.getElementById('count');
        countInfo.textContent = "（已入校:" + result.data.length + "人）";

        let container = document.getElementById('template');
        let tab = '<table border=1 width=500>';
        for (let i = 0; i < result.data.length; i++) {
            tab += '<tr>'

            body.push({
                '编号': i + 1,
                '姓名': result.data[i]['account'],
                '学号': result.data[i]['password']
            });

            for (let j = 0; j < 3; j++) {
                // tab += "<td>" + i + j + "</td>"//会轮着为每个各自顺次填入数字
                if (j == 0) {
                    tab += "<td>" + (i + 1) + "</td>"; //第一列填入列号
                }
                if (j == 1) {
                    tab += "<td>" + result.data[i]['account'] + "</td>"; //第二列填入姓名
                }
                if (j == 2) {
                    tab += "<td>" + result.data[i]['password'] + "</td>"; //第三列填入学号
                }
            }
            tab += '</tr>'
        }

        tab += '</table>';
        container.innerHTML = tab;
        //exportsCSV(headers, body, 'name_list');
        mHeaders = headers;
        mBody = body;
    },
    eCallback: function(e) {
        console.error("error happened!");
    }
};

window.base.getData(params, 'get_list');


const exportNameList = function() {
    exportsCSV(mHeaders, mBody, '进校学生名单_' + getLocalTime());
}




/**
 * [exportsCSV 导出数据到CSV]
 * @param  {Array}  [_headers=[]]   [表头]
 * @param  {Array}  [_body=[]]      [内容]
 * @param  {String} [name='exported'}] [文件名]
 * @return {[type]}                 [无]
 */
function exportsCSV(
    _headers = [],
    _body = [],
    name = 'exported',
    callback = () => { console.log("done!") }
) {
    //参数格式
    // _headers = ['id', 'age', 'sex']
    // _body = [{
    //         'id': '1',
    //         'age': 12,
    //         'sex': '男'
    //     },
    //     {
    //         'id': '2',
    //         'age': 24,
    //         'sex': '女'
    //     },
    //     ......
    // ];
    const headers = _headers.join(); // 格式化表头，不要在此换行，否则格式会不统一
    const body = _body.map(item => { // 格式化表内容
        // console.log(item);
        return '\n' + Object.values(item).join(); //在表头换行以保证换行统一无缩进
    });
    const output = headers.concat(body); // 合并

    const BOM = '\uFEFF';
    // 创建一个文件CSV文件
    var blob = new Blob([BOM + output], { type: 'text/csv' })
        // IE
    if (navigator.msSaveOrOpenBlob) {
        // 解决大文件下载失败
        // 保存到本地文件
        navigator.msSaveOrOpenBlob(blob, `${name}.csv`);
    } else {
        // let uri = encodeURI(`data:text/csv;charset=utf-8,${BOM}${output}`)
        let downloadLink = document.createElement('a');
        // downloadLink.href = uri
        downloadLink.setAttribute('href', URL.createObjectURL(blob));
        /*
            因为url有最大长度限制，encodeURI是会把字符串转化为url，
            超出限制长度部分数据丢失导致下载失败,为此我采用创建Blob
            （二进制大对象）的方式来存放缓存数据，具体代码如下：
        */
        downloadLink.download = `${name}.csv`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    callback();
}

function getLocalTime() {
    const nS = new Date().getTime() / 1000;
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}