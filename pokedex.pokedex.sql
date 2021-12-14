-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 29 nov. 2021 à 19:07
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pokedex`
--

-- --------------------------------------------------------

--
-- Structure de la table `pokedex`
--

DROP TABLE IF EXISTS `pokedex`;
CREATE TABLE IF NOT EXISTS `pokedex` (
  `id_pok` int(11) NOT NULL,
  `nom_pok` varchar(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id_pok`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `pokedex`
--

INSERT INTO `pokedex` (`id_pok`, `nom_pok`, `image`) VALUES
(1, 'Bulbizarre', 'https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png'),
(2, 'Herbizarre', 'https://www.pokepedia.fr/images/4/44/Herbizarre-RFVF.png'),
(3, 'Florizarre', 'https://www.pokepedia.fr/images/4/42/Florizarre-RFVF.png'),
(4, 'Salameche', 'https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png'),
(5, 'Reptincel', 'https://www.pokepedia.fr/images/6/64/Reptincel-RFVF.png'),
(6, 'Dracaufeu', 'https://www.pokepedia.fr/images/1/17/Dracaufeu-RFVF.png'),
(7, 'Carapuce', 'https://www.pokepedia.fr/images/c/cc/Carapuce-RFVF.png'),
(8, 'Carabaffe', 'https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png'),
(9, 'Tortank', 'https://www.pokepedia.fr/images/2/24/Tortank-RFVF.png'),
(10, 'Chenipan', 'https://www.pokepedia.fr/images/c/c7/Chenipan-RFVF.png'),
(11, 'Chrysacier', 'https://www.pokepedia.fr/images/6/6c/Chrysacier-RFVF.png'),
(12, 'Papilusion', 'https://www.pokepedia.fr/images/8/83/Papilusion-RFVF.png'),
(13, 'Aspicot', 'https://www.pokepedia.fr/images/9/9b/Aspicot-RFVF.png'),
(14, 'Coconfort', 'https://www.pokepedia.fr/images/b/b6/Coconfort-RFVF.png'),
(15, 'Dardargnan', 'https://www.pokepedia.fr/images/e/ee/Dardargnan-RFVF.png'),
(16, 'Roucool', 'https://www.pokepedia.fr/images/9/94/Roucool-RFVF.png'),
(17, 'Roucoups', 'https://www.pokepedia.fr/images/d/dc/Roucoups-RFVF.png'),
(18, 'Roucarnage', 'https://www.pokepedia.fr/images/d/d8/Roucarnage-RFVF.png'),
(19, 'Rattata', 'https://www.pokepedia.fr/images/9/9e/Rattata-RFVF.png'),
(20, 'Rattatac', 'https://www.pokepedia.fr/images/9/98/Rattatac-RFVF.png'),
(21, 'Piafabec', 'https://www.pokepedia.fr/images/7/7d/Piafabec-RFVF.png'),
(22, 'Rapasdepic', 'https://www.pokepedia.fr/images/f/f2/Rapasdepic-RFVF.png'),
(23, 'Abo', 'https://www.pokepedia.fr/images/5/56/Abo-RFVF.png'),
(24, 'Arbok', 'https://www.pokepedia.fr/images/7/7f/Arbok-RFVF.png'),
(25, 'Pikachu', 'https://www.pokepedia.fr/images/7/76/Pikachu-DEPS.png'),
(26, 'Raichu', 'https://www.pokepedia.fr/images/7/7d/Raichu-RFVF.png'),
(27, 'Sabelette', 'https://www.pokepedia.fr/images/6/66/Sabelette-RFVF.png'),
(28, 'Sablaireau', 'https://www.pokepedia.fr/images/a/a1/Sablaireau-RFVF.png'),
(29, 'Nidoran♀', 'https://www.pokepedia.fr/images/c/ca/Nidoran%E2%99%80-RFVF.png'),
(30, 'Nidorina', 'https://www.pokepedia.fr/images/b/b5/Nidorina-RFVF.png'),
(31, 'Nidoqueen', 'https://www.pokepedia.fr/images/7/76/Nidoqueen-RFVF.png'),
(32, 'Nidoran♂', 'https://www.pokepedia.fr/images/8/8e/Nidoran%E2%99%82-RFVF.png'),
(33, 'Nidorino', 'https://www.pokepedia.fr/images/1/1c/Nidorino-RFVF.png'),
(34, 'Nidoking', 'https://www.pokepedia.fr/images/5/5f/Nidoking-RFVF.png'),
(35, 'Melofee', 'https://www.pokepedia.fr/images/4/4d/M%C3%A9lof%C3%A9e-RFVF.png'),
(36, 'Melodelfe', 'https://www.pokepedia.fr/images/3/3f/M%C3%A9lodelfe-RFVF.png'),
(37, 'Goupix', 'https://www.pokepedia.fr/images/f/f6/Goupix-RFVF.png'),
(38, 'Feunard', 'https://www.pokepedia.fr/images/0/0c/Feunard-RFVF.png'),
(39, 'Rondoudou', 'https://www.pokepedia.fr/images/c/cd/Rondoudou-RFVF.png'),
(40, 'Grodoudou', 'https://www.pokepedia.fr/images/7/7e/Grodoudou-RFVF.png'),
(41, 'Nosferapti', 'https://www.pokepedia.fr/images/2/2b/Nosferapti-RFVF.png'),
(42, 'Nosferalto', 'https://www.pokepedia.fr/images/6/64/Nosferalto-RFVF.png'),
(43, 'Mystherbe', 'https://www.pokepedia.fr/images/3/39/Mystherbe-RFVF.png'),
(44, 'Ortide', 'https://www.pokepedia.fr/images/3/39/Ortide-RFVF.png'),
(45, 'Rafflesia', 'https://www.pokepedia.fr/images/c/cd/Rafflesia-RFVF.png'),
(46, 'Paras', 'https://www.pokepedia.fr/images/5/52/Paras-RFVF.png'),
(47, 'Parasect', 'https://www.pokepedia.fr/images/5/55/Parasect-RFVF.png'),
(48, 'Mimitoss', 'https://www.pokepedia.fr/images/a/a5/Mimitoss-RFVF.png'),
(49, 'Aeromite', 'https://www.pokepedia.fr/images/0/0f/A%C3%A9romite-RFVF.png'),
(50, 'Taupiqueur', 'https://www.pokepedia.fr/images/a/aa/Taupiqueur-RFVF.png'),
(51, 'Triopikeur', 'https://www.pokepedia.fr/images/8/85/Triopikeur-RFVF.png'),
(52, 'Miaouss', 'https://www.pokepedia.fr/images/b/b8/Miaouss-RFVF.png'),
(53, 'Persian', 'https://www.pokepedia.fr/images/4/41/Persian-RFVF.png'),
(54, 'Psykokwak', 'https://www.pokepedia.fr/images/4/44/Psykokwak-RFVF.png'),
(55, 'Akwakwak', 'https://www.pokepedia.fr/images/6/6e/Akwakwak-RFVF.png'),
(56, 'Ferosinge', 'https://www.pokepedia.fr/images/8/8e/F%C3%A9rosinge-RFVF.png'),
(57, 'Colossinge', 'https://www.pokepedia.fr/images/d/df/Colossinge-RFVF.png'),
(58, 'Caninos', 'https://www.pokepedia.fr/images/e/e2/Caninos-RFVF.png'),
(59, 'Arcanin', 'https://www.pokepedia.fr/images/7/7e/Arcanin-RFVF.png'),
(60, 'Ptitard', 'https://www.pokepedia.fr/images/4/4b/Ptitard-RFVF.png'),
(61, 'Tetarte', 'https://www.pokepedia.fr/images/5/54/T%C3%AAtarte-RFVF.png'),
(62, 'Tartard', 'https://www.pokepedia.fr/images/3/38/Tartard-RFVF.png'),
(63, 'Abra', 'https://www.pokepedia.fr/images/3/36/Abra-RFVF.png'),
(64, 'Kadabra', 'https://www.pokepedia.fr/images/6/6f/Kadabra-RFVF.png'),
(65, 'Alakazam', 'https://www.pokepedia.fr/images/6/68/Alakazam-RFVF.png'),
(66, 'Machoc', 'https://www.pokepedia.fr/images/7/75/Machoc-RFVF.png'),
(67, 'Machopeur', 'https://www.pokepedia.fr/images/c/cf/Machopeur-RFVF.png'),
(68, 'Mackogneur', 'https://www.pokepedia.fr/images/e/ee/Mackogneur-RFVF.png'),
(69, 'Chetiflor', 'https://www.pokepedia.fr/images/f/f9/Ch%C3%A9tiflor-RFVF.png'),
(70, 'Boustiflor', 'https://www.pokepedia.fr/images/f/f5/Boustiflor-RFVF.png'),
(71, 'Empiflor', 'https://www.pokepedia.fr/images/4/41/Empiflor-RFVF.png'),
(72, 'Tentacool', 'https://www.pokepedia.fr/images/d/de/Tentacool-RFVF.png'),
(73, 'Tentacruel', 'https://www.pokepedia.fr/images/1/1c/Tentacruel-RFVF.png'),
(74, 'Racaillou', 'https://www.pokepedia.fr/images/b/b2/Racaillou-RFVF.png'),
(75, 'Gravalanch', 'https://www.pokepedia.fr/images/a/a5/Gravalanch-RFVF.png'),
(76, 'Grolem', 'https://www.pokepedia.fr/images/a/a3/Grolem-RFVF.png'),
(77, 'Ponyta', 'https://www.pokepedia.fr/images/8/8f/Ponyta-RFVF.png'),
(78, 'Galopa', 'https://www.pokepedia.fr/images/9/9c/Galopa-RFVF.png'),
(79, 'Ramoloss', 'https://www.pokepedia.fr/images/5/5a/Ramoloss-RFVF.png'),
(80, 'Flagadoss', 'https://www.pokepedia.fr/images/b/b4/Flagadoss-RFVF.png'),
(81, 'Magneti', 'https://www.pokepedia.fr/images/b/b9/Magn%C3%A9ti-RFVF.png'),
(82, 'Magneton', 'https://www.pokepedia.fr/images/3/36/Magn%C3%A9ton-RFVF.png'),
(83, 'Canarticho', 'https://www.pokepedia.fr/images/0/07/Canarticho-RFVF.png'),
(84, 'Doduo', 'https://www.pokepedia.fr/images/2/2a/Doduo-RFVF.png'),
(85, 'Dodrio', 'https://www.pokepedia.fr/images/2/2e/Dodrio-RFVF.png'),
(86, 'Otaria', 'https://www.pokepedia.fr/images/3/31/Otaria-RFVF.png'),
(87, 'Lamantine', 'https://www.pokepedia.fr/images/9/93/Lamantine-RFVF.png'),
(88, 'Tadmorv', 'https://www.pokepedia.fr/images/9/9c/Tadmorv-RFVF.png'),
(89, 'Grotadmorv', 'https://www.pokepedia.fr/images/8/8f/Grotadmorv-RFVF.png'),
(90, 'Kokiyas', 'https://www.pokepedia.fr/images/e/eb/Kokiyas-RFVF.png'),
(91, 'Crustabri', 'https://www.pokepedia.fr/images/8/84/Crustabri-RFVF.png'),
(92, 'Fantominus', 'https://www.pokepedia.fr/images/9/9f/Fantominus-RFVF.png'),
(93, 'Spectrum', 'https://www.pokepedia.fr/images/0/09/Spectrum-RFVF.png'),
(94, 'Ectoplasma', 'https://www.pokepedia.fr/images/8/8d/Ectoplasma-RFVF.png'),
(95, 'Onix', 'https://www.pokepedia.fr/images/2/24/Onix-RFVF.png'),
(96, 'Soporifik', 'https://www.pokepedia.fr/images/9/94/Soporifik-RFVF.png'),
(97, 'Hypnomade', 'https://www.pokepedia.fr/images/3/3a/Hypnomade-RFVF.png'),
(98, 'Krabby', 'https://www.pokepedia.fr/images/e/ed/Krabby-RFVF.png'),
(99, 'Krabboss', 'https://www.pokepedia.fr/images/5/55/Krabboss-RFVF.png'),
(100, 'Voltorbe', 'https://www.pokepedia.fr/images/5/59/Voltorbe-RFVF.png'),
(101, 'Electrode', 'https://www.pokepedia.fr/images/0/03/%C3%89lectrode-RFVF.png'),
(102, 'Noeunoeuf', 'https://www.pokepedia.fr/images/3/39/Noeunoeuf-RFVF.png'),
(103, 'Noadkoko', 'https://www.pokepedia.fr/images/1/1f/Noadkoko-RFVF.png'),
(104, 'Osselait', 'https://www.pokepedia.fr/images/5/58/Osselait-RFVF.png'),
(105, 'Ossatueur', 'https://www.pokepedia.fr/images/3/39/Ossatueur-RFVF.png'),
(106, 'Kicklee', 'https://www.pokepedia.fr/images/e/e7/Kicklee-RFVF.png'),
(107, 'Tygnon', 'https://www.pokepedia.fr/images/9/9c/Tygnon-RFVF.png'),
(108, 'Excelangue', 'https://www.pokepedia.fr/images/7/74/Excelangue-RFVF.png'),
(109, 'Smogo', 'https://www.pokepedia.fr/images/5/53/Smogo-RFVF.png'),
(110, 'Smogogo', 'https://www.pokepedia.fr/images/3/38/Smogogo-RFVF.png'),
(111, 'Rhinocorne', 'https://www.pokepedia.fr/images/a/a1/Rhinocorne-RFVF.png'),
(112, 'Rhinoferos', 'https://www.pokepedia.fr/images/8/80/Rhinof%C3%A9ros-RFVF.png'),
(113, 'Leveinard', 'https://www.pokepedia.fr/images/b/b0/Leveinard-DEPS.png'),
(114, 'Saquedeneu', 'https://www.pokepedia.fr/images/d/dc/Saquedeneu-RFVF.png'),
(115, 'Kangourex', 'https://www.pokepedia.fr/images/7/78/Kangourex-RFVF.png'),
(116, 'Hypotrempe', 'https://www.pokepedia.fr/images/3/3e/Hypotrempe-RFVF.png'),
(117, 'Hypocean', 'https://www.pokepedia.fr/images/f/fc/Hypoc%C3%A9an-RFVF.png'),
(118, 'Poissirene', 'https://www.pokepedia.fr/images/1/1f/Poissir%C3%A8ne-RFVF.png'),
(119, 'Poissoroy', 'https://www.pokepedia.fr/images/e/ed/Poissoroy-RFVF.png'),
(120, 'Stari', 'https://www.pokepedia.fr/images/3/34/Stari-RFVF.png'),
(121, 'Staross', 'https://www.pokepedia.fr/images/8/85/Staross-RFVF.png'),
(122, 'M. Mime', 'https://www.pokepedia.fr/images/3/3b/M._Mime-RFVF.png'),
(123, 'Insecateur', 'https://www.pokepedia.fr/images/a/a4/Ins%C3%A9cateur-RFVF.png'),
(124, 'Lippoutou', 'https://www.pokepedia.fr/images/4/44/Lippoutou-RFVF.png'),
(125, 'Elektek', 'https://www.pokepedia.fr/images/1/18/%C3%89lektek-RFVF.png'),
(126, 'Magmar', 'https://www.pokepedia.fr/images/8/8d/Magmar-RFVF.png'),
(127, 'Scarabrute', 'https://www.pokepedia.fr/images/9/92/Scarabrute-RFVF.png'),
(128, 'Tauros', 'https://www.pokepedia.fr/images/4/48/Tauros-RFVF.png'),
(129, 'Magicarpe', 'https://www.pokepedia.fr/images/0/06/Magicarpe-RFVF.png'),
(130, 'Leviator', 'https://www.pokepedia.fr/images/f/f2/L%C3%A9viator-RFVF.png'),
(131, 'Lokhlass', 'https://www.pokepedia.fr/images/4/4d/Lokhlass-RFVF.png'),
(132, 'Metamorph', 'https://www.pokepedia.fr/images/e/e3/M%C3%A9tamorph-RFVF.png'),
(133, 'Evoli', 'https://www.pokepedia.fr/images/8/8b/%C3%89voli-RFVF.png'),
(134, 'Aquali', 'https://www.pokepedia.fr/images/6/6b/Aquali-RFVF.png'),
(135, 'Voltali', 'https://www.pokepedia.fr/images/8/89/Voltali-RFVF.png'),
(136, 'Pyroli', 'https://www.pokepedia.fr/images/6/64/Pyroli-RFVF.png'),
(137, 'Porygon', 'https://www.pokepedia.fr/images/0/01/Porygon-RFVF.png'),
(138, 'Amonita', 'https://www.pokepedia.fr/images/8/83/Amonita-RFVF.png'),
(139, 'Amonistar', 'https://www.pokepedia.fr/images/f/f2/Amonistar-RFVF.png'),
(140, 'Kabuto', 'https://www.pokepedia.fr/images/5/57/Kabuto-RFVF.png'),
(141, 'Kabutops', 'https://www.pokepedia.fr/images/3/35/Kabutops-RFVF.png'),
(142, 'Ptera', 'https://www.pokepedia.fr/images/3/34/Pt%C3%A9ra-RFVF.png'),
(143, 'Ronflex', 'https://www.pokepedia.fr/images/2/2b/Ronflex-RFVF.png'),
(144, 'Artikodin', 'https://www.pokepedia.fr/images/b/bb/Artikodin-RFVF.png'),
(145, 'Electhor', 'https://www.pokepedia.fr/images/8/81/%C3%89lecthor-RFVF.png'),
(146, 'Sulfura', 'https://www.pokepedia.fr/images/d/db/Sulfura-DEPS.png'),
(147, 'Minidraco', 'https://www.pokepedia.fr/images/1/11/Minidraco-RFVF.png'),
(148, 'Draco', 'https://www.pokepedia.fr/images/d/d1/Draco-RFVF.png'),
(149, 'Dracolosse', 'https://www.pokepedia.fr/images/8/87/Dracolosse-RFVF.png'),
(150, 'Mewtwo', 'https://www.pokepedia.fr/images/d/d8/Mewtwo-DEPS.png'),
(151, 'Mew', 'https://www.pokepedia.fr/images/1/16/Mew-DEPS.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
