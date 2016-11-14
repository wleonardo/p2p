/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50548
 Source Host           : localhost
 Source Database       : code

 Target Server Type    : MySQL
 Target Server Version : 50548
 File Encoding         : utf-8

 Date: 11/14/2016 18:02:16 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `resource`
-- ----------------------------
DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `hash` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `files` binary(11) DEFAULT NULL,
  `pieces` binary(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hash` (`hash`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `resource`
-- ----------------------------
BEGIN;
INSERT INTO `resource` VALUES ('66', 'Герберт Фрэнк', '6d13b07c32bb9f22ee91bda45d90ecd9a0324505', null, null), ('67', 'Tad Williams - Tailchasers Song', 'bd12ef085561962ce72d2f6b00bca542e06520b2', null, null), ('70', 'The Stylistics - Break Up to Make Up__AAC_128k.m4a', 'ce60c5dfed0d0c352ed4eaa0d0aef459ff3fd18a', null, 0x547407b315e4ce2b7f5a7aeaf67da2fe03286ddf12f95710ddaa4626a8f94b4c54cf3964d383cd3212f95710ddaa4626a8f9), ('71', 'Neighbors.2.Sorority.Rising.2016.D.HDRip.avi', '8337e2381235716c5c20b4460b0f64d1dc927ef8', null, 0xc2b04f185c795397f01b6b123dfb32550d4fe9ae1cff17d19ec4fee2940cd886ced5caf8aad3df342da43d1a34ac1ecea5b3), ('72', 'The Used - Lies For The Liars (2007).rar', '801b7037e5edc819dc7aa1fe2fbb6d3f164885ab', null, 0x72057adc4c60d5f038436589ee964584dcb24cb37b9f6678e1475aa4e1f9969755cb94d15e5c007e3370c5e56362b54fa3ee), ('73', 'Voshogdenie_k_bogam.h5m', 'c4c0167b050dd5f4a8a329db4fa0f09d377b3084', null, 0xcad5005f8bf558ace46fea3aed397b21325a7d02f97d3366881ffa0b4be0346793b3482a7cde57fcfb25ed30885a09a717fd), ('78', 'Секреты Миллионера Луконин.mp3', 'bd12e8a004d524bd6dfdfe948dea07d0ef5d121b', null, 0x808787686b7e80368cdc75562d628fa5bb77479cd8f87c6d44d251a3a3ac9e041a9b38b357f2f6359fa114ac01b5a7a2adb9), ('79', 'Watch Dogs V2 Repack-VEBMAX', '801b760a95c8df551c5fddc8e30a3548ea0ac2c4', 0x0000000000000000000000, 0xa2cb85469a0ac839cd4b2c1557b00635230fec0f8fcf435427e16b1c8d699d02fa671a8654b9e73a5334398bd23a1622d129);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
