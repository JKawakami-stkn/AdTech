-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 
-- サーバのバージョン： 10.3.16-MariaDB
-- PHP のバージョン: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `at`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `company`
--

CREATE TABLE `company` (
  `no` varchar(2) DEFAULT NULL,
  `name` varchar(5) DEFAULT NULL,
  `representative` varchar(5) DEFAULT NULL,
  `representative_kana` varchar(9) DEFAULT NULL,
  `tell` varchar(12) DEFAULT NULL,
  `fax` varchar(12) DEFAULT NULL,
  `postal_code` varchar(8) DEFAULT NULL,
  `street_address_1` varchar(3) DEFAULT NULL,
  `street_address_2` varchar(7) DEFAULT NULL,
  `street_address_3` varchar(6) DEFAULT NULL,
  `street_address_4` varchar(10) DEFAULT NULL,
  `founding_year` varchar(10) DEFAULT NULL,
  `age` varchar(2) DEFAULT NULL,
  `blood_type` varchar(3) DEFAULT NULL,
  `random_number` varchar(3) DEFAULT NULL,
  `password` varchar(8) DEFAULT NULL,
  `lon` varchar(9) DEFAULT NULL,
  `lat` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `company`
--

INSERT INTO `company` (`no`, `name`, `representative`, `representative_kana`, `tell`, `fax`, `postal_code`, `street_address_1`, `street_address_2`, `street_address_3`, `street_address_4`, `founding_year`, `age`, `blood_type`, `random_number`, `password`, `lon`, `lat`) VALUES
('1', '新見', '小田一也', 'オダカズヤ', '086-963-9700', '', '718-0311', '岡山県', '新見市', '哲多町蚊家', '2002-5-10', '1979/6/20', '40', 'A', '360', 'y4jJN,QM', '133.40439', '34.90906'),
('2', '総社', '山岡舞香', 'ヤマオカマイカ', '086-687-1213', '086-687-1214', '719-1172', '岡山県', '総社市', '清音軽部', '4-17-11', '1983/8/5', '35', 'A', '478', 'FXZsgn0f', '133.73677', '34.65063'),
('3', '岡山東', '新倉真樹', 'ニイクラマキ', '086-67-1874', '', '709-0875', '岡山県', '岡山市東区', '瀬戸町寺地', '4-4', '1998/7/31', '20', 'A', '353', '8XCKd1uD', '134.04616', '34.74086'),
('4', '岡山北', '金田琉菜', 'カナダルナ', '086-259-2392', '', '709-2132', '岡山県', '岡山市北区', '御津草生', '2002-1-7', '1993/4/6', '26', 'O', '893', '0tI3,vXh', '133.93838', '34.81338'),
('5', '岡山中', '野崎千春', 'ノザキチハル', '0865-39-8719', '', '703-8247', '岡山県', '岡山市中区', 'さい東町', '2-15-3', '1994/8/10', '24', 'O', '402', 'C7Ss1fOw', '133.95021', '34.67879'),
('6', '岡山中仙道', '山元照美', 'ヤマモトテルミ', '086-778-5363', '', '700-0964', '岡山県', '岡山市北区', '中仙道', '2001-4-8', '1976/9/2', '42', 'AB', '775', 'ktCmA_8d', '133.88632', '34.64420'),
('7', '美作', '織田功一', 'オダコウイチ', '086-390-8504', '086-390-8505', '709-4211', '岡山県', '美作市', '五名', '2001-1-1', '1973/5/2', '46', 'O', '451', 's,J6q8DH', '134.27514', '35.05897'),
('8', '倉敷', '星裕治', 'ホシユウジ', '086-640-8777', '', '711-0922', '岡山県', '倉敷市', '児島元浜町', '2-14-15', '1985/6/21', '34', 'O', '374', '0HhDatIb', '133.80292', '34.45777'),
('9', '瀬戸', '亀山美保', 'カメヤマミホ', '086-924-9381', '', '701-4214', '岡山県', '瀬戸内市', '邑久町本庄', '3-7', '1989/7/20', '29', 'B', '855', 'HMbw7dnE', '134.11706', '34.66035'),
('10', '真庭', '氏家宙子', 'ウジイエヒロコ', '086-662-8661', '', '717-0515', '岡山県', '真庭市', '蒜山別所', '2003-2-9', '1994/2/18', '25', 'O', '735', 'JyNjyV_W', '133.77738', '35.29537'),
('11', '福山', '末吉加奈子', 'スエヨシカナコ', '082-925-6452', '', '720-1265', '広島県', '福山市', '芦田町向陽台', '3-13-10', '1965/7/12', '53', 'A', '369', '#NAME?', '133.28928', '34.52433'),
('12', '呉', '細田佳奈', 'ホソダヨシナ', '0827-9-0491', '0827-9-0491', '737-0028', '広島県', '呉市', '幸町', '2003-3-17', '1963/3/22', '56', 'A', '191', 'A5XkhoX_', '132.56445', '34.23994'),
('13', '広島南', '磯野直樹', 'イソノナオキ', '0845-9-8308', '', '734-0027', '広島県', '広島市南区', '仁保南', '2-14', '1981/10/8', '37', 'B', '102', 'ZW9366G9', '132.49442', '34.36297'),
('14', '福山簑島', '森谷沙希', 'モリヤサキ', '0827-44-8644', '', '721-0957', '広島県', '福山市', '箕島町', '4-13-1', '1959/10/9', '59', 'O', '123', '5Ohd-z0x', '133.40735', '34.44012'),
('15', '尾道', '小林玲二', 'コバヤシレイジ', '082-252-2382', '', '722-0201', '広島県', '尾道市', '原田町小原', '2002-7-7', '1975/11/14', '43', 'O', '350', 'frpMrCNn', '133.22465', '34.49983'),
('16', '庄原', '長谷川善成', 'ハセガワヨシナリ', '084-134-0741', '', '729-5601', '広島県', '庄原市', '西城町小鳥原', '2002-4-7', '1983/1/31', '36', 'O', '779', 'Jv_Conzl', '133.16223', '35.02947'),
('17', '大竹', '杉本里沙', 'スギモトリサ', '0847-24-5645', '', '739-0646', '広島県', '大竹市', '栗谷町大栗林', '2004-4-16', '1986/3/1', '33', 'O', '680', 'JygGU7OS', '132.15591', '34.29409'),
('18', '広島佐伯', '滝口椛', 'タキグチモミジ', '082-145-3174', '', '738-0602', '広島県', '広島市佐伯区', '湯来町麦谷', '1-16-6', '1965/11/27', '53', 'O', '796', 'E9tOcT_F', '132.29685', '34.50619'),
('19', '福山沼隈', '白川好夫', 'シラカワヨシオ', '082-06-3574', '', '720-0312', '広島県', '福山市', '沼隈町能登原', '4-19-16', '1974/4/7', '45', 'A', '460', 'H9ouN_2A', '133.35609', '34.37912'),
('20', '三次', '片山仁美', 'カタヤマヒトミ', '084-021-8587', '', '729-6612', '広島県', '三次市', '三和町下板木', '3-2', '1979/6/6', '40', 'B', '289', 'ST7OrAER', '132.83204', '34.69716'),
('21', '広島五日市', '藤森一久', 'フジモリカズヒサ', '082-114-4556', '', '731-5161', '広島県', '広島市佐伯区', '五日市港', '2-18-10', '1986/2/27', '33', 'O', '785', 'NUJLkYI4', '132.36661', '34.35557'),
('22', '江田島', '菅谷広吉', 'スガヤヒロキチ', '0823-5-7547', '0823-5-7547', '737-2133', '広島県', '江田島市', '江田島町鷲部', '2001-4-15', '1973/3/19', '46', 'A', '730', 'UYwAZmTr', '132.47869', '34.23432'),
('23', '安芸高田', '高坂正之', 'コウサカマサユキ', '084-970-6820', '084-970-6820', '739-1108', '広島県', '安芸高田市', '甲田町深瀬', '2-10', '1962/2/5', '57', 'A', '655', '#VALUE!', '132.78085', '34.73555'),
('24', '下関', '渡部平一', 'ワタナベヘイイチ', '083-533-1102', '', '750-1146', '山口県', '下関市', '小月公園町', '3-12', '1998/3/13', '21', 'A', '865', 'AT7snYla', '131.03194', '34.07246'),
('25', '周南', '青野雄也', 'アオノユウヤ', '083-144-5738', '083-144-5739', '745-0073', '山口県', '周南市', '代々木通り', '3-5', '1978/4/8', '41', 'O', '825', '5RUrHdQn', '131.80413', '34.05489'),
('26', '山口', '立花栄一', 'タチバナエイイチ', '083-327-3359', '083-327-3360', '747-1221', '山口県', '山口市', '鋳銭司', '1-18', '1988/6/13', '31', 'A', '242', 'ql8FHP6Y', '131.46977', '34.08393'),
('27', '下関長府', '黒岩幸彦', 'クロイワユキヒコ', '0833-87-6500', '0833-87-6500', '752-0954', '山口県', '下関市', '長府古城町', '3-15-16', '1983/6/12', '36', 'AB', '896', 'jUGLyst-', '130.99387', '34.01159'),
('28', '美祢', '堀江千夏', 'ホリエチナツ', '0833-68-2952', '', '759-2212', '山口県', '美祢市', '大嶺町東分', '2003-8-9', '1969/11/27', '49', 'A', '544', ',8NbrhoY', '131.20438', '34.16788'),
('29', '下関本', '伊東尚司', 'イトウショウジ', '083-85-8314', '', '759-6533', '山口県', '下関市', '永田本町', '2003-3-16', '1982/6/13', '37', 'A', '808', 'zqG0_JAO', '130.89605', '34.07446'),
('30', '長門', '益子千代', 'マスコチヨ', '083-504-3687', '', '759-4711', '山口県', '長門市', '油谷後畑', '2-5', '1968/2/28', '51', 'A', '368', 'bLrcto30', '131.02918', '34.40685'),
('31', '宇部', '丸田夏帆', 'マルタカホ', '083-532-9377', '083-532-9377', '755-0072', '山口県', '宇部市', '中村', '2003-9-14', '1974/11/17', '44', 'O', '335', '7cC91tb9', '131.26088', '33.96041'),
('32', '岩国', '松浦公男', 'マツウラキミオ', '083-289-3453', '', '740-0604', '山口県', '岩国市', '本郷町宇塚', '2003-10-12', '1973/9/10', '45', 'AB', '719', 'Mvhu3_v8', '132.02931', '34.30094'),
('33', '東伯', '西野忠夫', 'ニシノタダオ', '0859-16-4024', '', '689-2102', '鳥取県', '東伯郡北栄町', '国坂', '1-5', '1978/12/4', '40', 'B', '753', 'csBEbImY', '133.82786', '35.48244'),
('34', '鳥取本', '矢口友吉', 'ヤグチトモヨシ', '0859-18-1995', '', '680-1428', '鳥取県', '鳥取市', '三山口', '2003-5-8', '1962/11/3', '56', 'A', '643', 'srEpfxim', '134.14316', '35.48139'),
('35', '米子上福原', '海老原幸恵', 'エビハラユキエ', '0859-97-3872', '', '683-0004', '鳥取県', '米子市', '上福原', '2002-6-6', '1967/10/8', '51', 'O', '183', 'RTa2OW8l', '133.35330', '35.43989'),
('36', '鳥取河原町', '高坂恵美子', 'コウサカエミコ', '0858-74-6262', '0858-74-6262', '680-1213', '鳥取県', '鳥取市', '河原町高福', '2-17-3', '1967/3/12', '52', 'AB', '74', 'Zc0Loe6L', '134.20491', '35.39318'),
('37', '倉吉', '松川雅也', 'マツカワマサヤ', '0857-60-8181', '0857-60-8182', '682-0625', '鳥取県', '倉吉市', '椋波', '2002-3-17', '1986/2/27', '33', 'AB', '311', 'tOUEvYt4', '133.71836', '35.40841'),
('38', '米子西町', '河村啓三', 'カワムラケイゾウ', '0859-61-4479', '0859-61-4479', '683-0826', '鳥取県', '米子市', '西町', '2004-7-15', '1973/4/29', '46', 'B', '617', '4yK,icdB', '133.32701', '35.42928'),
('39', '鳥取大覚寺', '安部杏', 'アベアン', '0857-28-8749', '0857-28-8749', '680-0863', '鳥取県', '鳥取市', '大覚寺', '2001-6-6', '1976/4/25', '43', 'O', '748', '3jaIb2Lg', '134.23121', '35.48118'),
('40', '邑智', '大西伸生', 'オオニシノブオ', '0853-39-3862', '', '696-0003', '島根県', '邑智郡川本町', '因原', '2003-2-9', '1964/10/6', '54', 'O', '899', '_UaC2P6v', '132.47352', '34.96820'),
('41', '鹿足', '江口静香', 'エグチシズカ', '0856-79-2017', '', '699-5635', '島根県', '鹿足郡津和野町', '山下', '2001-4-7', '1988/8/22', '30', 'A', '687', 'IgjlapWM', '131.71541', '34.51373'),
('42', '松江島根', '山形香穂', 'ヤマガタカホ', '0852-44-9393', '', '690-1212', '島根県', '松江市', '島根町野波', '1-14-13', '1991/6/11', '28', 'A', '387', '_,,q53pH', '133.09788', '35.57811'),
('43', '松江宍道', '奈良琴羽', 'ナラコトハ', '0854-22-8984', '', '699-0403', '島根県', '松江市', '宍道町西来待', '2004-1-16', '1968/9/11', '50', 'A', '488', 'zrgx,EqL', '132.94295', '35.41536'),
('44', '安来', '榎本杏', 'エノモトアン', '0854-25-4077', '', '692-0044', '島根県', '安来市', '下吉田町', '3-16-20', '1977/11/30', '41', 'AB', '67', 'S6ZBH31U', '133.23865', '35.37238'),
('45', '益田', '藤巻美紅', 'フジマキミク', '0855-67-4381', '0855-67-4381', '698-2254', '島根県', '益田市', '桂平町', '2002-12-11', '1966/7/27', '52', 'B', '913', 'ye7Rr2Df', '131.72731', '34.60151'),
('46', '出雲', '下山敏嗣', 'シモヤマトシツグ', '0855-00-8379', '', '693-0211', '島根県', '出雲市', '馬木北町', '4-11', '1969/1/29', '50', 'O', '300', 'G0Bo89Tn', '132.76515', '35.33847'),
('47', '浜田', '郡司市太郎', 'グンジイチタロウ', '0854-71-1168', '', '697-0026', '島根県', '浜田市', '田町', '3-13-15', '1987/4/20', '32', 'A', '759', 'Ftm,5DtI', '132.08261', '34.90029'),
('48', '松江浜乃木', '河口健介', 'カワグチケンスケ', '0855-99-6337', '', '690-0044', '島根県', '松江市', '浜乃木', '2001-5-20', '1964/12/22', '54', 'AB', '130', 'zLsxVHla', '133.05372', '35.45005');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
