/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 8.0.26 : Database - driprestes
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`driprestes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `driprestes`;

/*Table structure for table `categorias` */

DROP TABLE IF EXISTS `categorias`;

CREATE TABLE `categorias` (
  `categoria_id` int NOT NULL AUTO_INCREMENT,
  `nome_categoria` varchar(150) NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `categorias` */

insert  into `categorias`(`categoria_id`,`nome_categoria`) values 
(1,'tênis'),
(2,'camiseta'),
(3,'jaquetas e moletons'),
(4,'bottomwear');

/*Table structure for table `cliente` */

DROP TABLE IF EXISTS `cliente`;

CREATE TABLE `cliente` (
  `cliente_id` int NOT NULL AUTO_INCREMENT,
  `endereco_cliente` varchar(150) NOT NULL,
  `nome_cliente` varchar(150) DEFAULT NULL,
  `cel_cliente` int NOT NULL,
  `email_cliente` varchar(150) DEFAULT NULL,
  `senha_cliente` varchar(150) DEFAULT NULL,
  `datanasc_cliente` date NOT NULL,
  `rg_cliente` int DEFAULT NULL,
  `cpf_cliente` int DEFAULT NULL,
  PRIMARY KEY (`cliente_id`,`endereco_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=235 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `cliente` */

insert  into `cliente`(`cliente_id`,`endereco_cliente`,`nome_cliente`,`cel_cliente`,`email_cliente`,`senha_cliente`,`datanasc_cliente`,`rg_cliente`,`cpf_cliente`) values 
(1,'Rua torres','Gui',435345,'anthony.farias10@outlook.com','435345','0000-00-00',345435345,345345);

/*Table structure for table `pagamento` */

DROP TABLE IF EXISTS `pagamento`;

CREATE TABLE `pagamento` (
  `forma_pagamento` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `pagamento` */

insert  into `pagamento`(`forma_pagamento`) values 
(1),
(2);

/*Table structure for table `produto` */

DROP TABLE IF EXISTS `produto`;

CREATE TABLE `produto` (
  `produto_id` int NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(150) DEFAULT NULL,
  `preco_produto` int DEFAULT NULL,
  `categoria_id` int NOT NULL,
  `vendedor_id` int NOT NULL,
  `qtd_estoque` int DEFAULT NULL,
  PRIMARY KEY (`produto_id`),
  KEY `categoria_idFK` (`categoria_id`),
  KEY `vendedor_idFK2` (`vendedor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `produto` */

insert  into `produto`(`produto_id`,`nome_produto`,`preco_produto`,`categoria_id`,`vendedor_id`,`qtd_estoque`) values 
(1,'calors',40,0,0,3),
(2,'Fear of God Essentials 3 Pack Short-Sleeve Tee \'Multicolor\'',690,2,3,4),
(3,'Wmns Dunk High \'Lemon Twist',1100,1,7,2),
(4,'Undefeated x Air Force 1 Low SP \'Dunk vs AF1\'',900,1,4,7),
(5,'Dunk Low \'Championship Red',1450,1,8,2),
(6,'Rick Owens DRKSHDW Subhuman T-Shirt \'Grey\'',899,2,5,10),
(7,'Supreme x True Religion Zip Up Hooded Sweatshirt \'Black\'',3477,3,3,2),
(8,'Air Jordan x Travis Scott x Fragment Shorts \'Black\'',1200,4,6,3);

/*Table structure for table `venda` */

DROP TABLE IF EXISTS `venda`;

CREATE TABLE `venda` (
  `venda_id` int NOT NULL AUTO_INCREMENT,
  `valor_total` int NOT NULL,
  `produto_id` int DEFAULT NULL,
  `vendedor_id` int DEFAULT NULL,
  `cliente_id` int DEFAULT NULL,
  `endereco_cliente` varchar(150) DEFAULT NULL,
  `data_venda` datetime DEFAULT NULL,
  PRIMARY KEY (`venda_id`),
  KEY `produto_idFK` (`produto_id`),
  KEY `vendedor_idFK` (`vendedor_id`),
  KEY `cliente_idFK` (`cliente_id`),
  CONSTRAINT `cliente_idFK` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`cliente_id`),
  CONSTRAINT `produto_idFK` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`produto_id`),
  CONSTRAINT `vendedor_idFK` FOREIGN KEY (`vendedor_id`) REFERENCES `vendedor` (`vendedor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `venda` */

/*Table structure for table `venda_do_produto` */

DROP TABLE IF EXISTS `venda_do_produto`;

CREATE TABLE `venda_do_produto` (
  `produto_id` int DEFAULT NULL,
  `venda_id` int DEFAULT NULL,
  KEY `produto_idFK2` (`produto_id`),
  KEY `venda_idFK` (`venda_id`),
  CONSTRAINT `produto_idFK2` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`produto_id`),
  CONSTRAINT `venda_idFK` FOREIGN KEY (`venda_id`) REFERENCES `venda` (`venda_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `venda_do_produto` */

/*Table structure for table `vendedor` */

DROP TABLE IF EXISTS `vendedor`;

CREATE TABLE `vendedor` (
  `vendedor_id` int NOT NULL AUTO_INCREMENT,
  `categoria_vendedor` varchar(150) NOT NULL,
  `nome_vendedor` varchar(150) DEFAULT NULL,
  `cel_vendedor` int NOT NULL,
  `email_vendedor` varchar(150) DEFAULT NULL,
  `senha_vendedor` int DEFAULT NULL,
  `datanasc_vendedor` date NOT NULL,
  `rg_vendedor` int DEFAULT NULL,
  `cpf_vendedor` int DEFAULT NULL,
  `endereco_vendedor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`vendedor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `vendedor` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
