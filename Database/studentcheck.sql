/*
Navicat MySQL Data Transfer

Source Server         : Alexander
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : localbjutcheck

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-07-12 15:32:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for logged_list
-- ----------------------------
DROP TABLE IF EXISTS `logged_list`;
CREATE TABLE `logged_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of logged_list
-- ----------------------------
INSERT INTO `logged_list` VALUES ('1', 'Alexander', '123456789');
INSERT INTO `logged_list` VALUES ('2', 'Ezhajan', '123456789');
INSERT INTO `logged_list` VALUES ('3', 'kiki', '123');
INSERT INTO `logged_list` VALUES ('4', 'Tonny', '123456789');
INSERT INTO `logged_list` VALUES ('5', 'Ton55ny', '123456789');
INSERT INTO `logged_list` VALUES ('6', 'ToQm', 'WWW');
INSERT INTO `logged_list` VALUES ('7', '2ww', '123456789');

-- ----------------------------
-- Table structure for login_info
-- ----------------------------
DROP TABLE IF EXISTS `login_info`;
CREATE TABLE `login_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of login_info
-- ----------------------------
INSERT INTO `login_info` VALUES ('1', 'Alexander', '123456789');
INSERT INTO `login_info` VALUES ('2', 'AlexanderEzhar', '123456789');
INSERT INTO `login_info` VALUES ('3', 'Ezhajan', '123456789');
INSERT INTO `login_info` VALUES ('4', 'Ezhajan1', '123456789');
INSERT INTO `login_info` VALUES ('5', 'Tonny', '123456789');
INSERT INTO `login_info` VALUES ('6', 'Ton55ny', '123456789');
INSERT INTO `login_info` VALUES ('7', '2ww', '123456789');
INSERT INTO `login_info` VALUES ('8', 'kiki', '123');
INSERT INTO `login_info` VALUES ('9', 'kiki', '1234');
INSERT INTO `login_info` VALUES ('10', 'Tom', 'WWW');
INSERT INTO `login_info` VALUES ('11', 'ToQm', 'WWW');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` int(11) DEFAULT NULL,
  `nickname` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', null, null);
