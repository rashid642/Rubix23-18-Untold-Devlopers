-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2023 at 06:40 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodbachao`
--

-- --------------------------------------------------------

--
-- Table structure for table `doner_form`
--

CREATE TABLE `doner_form` (
  `doner_name` varchar(50) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `foot_item` varchar(100) NOT NULL,
  `no_of_people` int(11) NOT NULL,
  `address` varchar(200) NOT NULL,
  `no_of_hours` int(11) NOT NULL,
  `image` varchar(200) NOT NULL,
  `did` int(11) NOT NULL,
  `current_date_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `expiry` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `actual_price` int(11) NOT NULL,
  `discounted_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `email`, `product_name`, `brand`, `expiry`, `quantity`, `actual_price`, `discounted_price`) VALUES
(1, 'amit@gmail.com', 'Chana Dal', 'Motiour', '12-12-2020', '5', 120, 90),
(2, 'amit@gmail.com', 'Masoor Dal', 'Something', '2023-01-21', '12', 120, 70),
(3, 'rashid@gmail.com', 'Rai Tail', 'Nutella', '2023-02-24', '15', 1200, 1000),
(4, 'rashid@gmail.com', 'Basmati Chawal', 'Basmati', '2023-02-22', '15', 2500, 1700),
(5, 'karan@gmail.com', 'Honey', 'Dabur', '2023-03-30', '5', 1000, 900),
(6, 'karan@gmail.com', 'Yogurt', 'Amul', '2023-01-26', '3', 350, 300);

-- --------------------------------------------------------

--
-- Table structure for table `ngodetails`
--

CREATE TABLE `ngodetails` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `founded` int(11) NOT NULL,
  `founder` varchar(100) NOT NULL,
  `areaofwork` varchar(200) NOT NULL,
  `website` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `imageurl` varchar(300) NOT NULL,
  `city` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ngodetails`
--

INSERT INTO `ngodetails` (`id`, `name`, `founded`, `founder`, `areaofwork`, `website`, `address`, `contact`, `imageurl`, `city`) VALUES
(1, 'CRY (Child Rights and You)', 1979, 'Rippan Kapur', 'Healthcare, nutrition, education', 'www.cry.org', '89/A Anand Estate, Sane Guruji Marg', 'cryinfo.mum@crymail.org', 'https://img.freepik.com/free-vector/logo-made-with-wavy-human-silhouettes_1025-394.jpg?w=2000', 'Mumbai'),
(2, 'Smile Foundation', 2002, 'Santanu Mishra', 'Disaster response, Healthcare, Livelihood', 'www.smilefoundationindia.org', '161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre', 'info@smilefoundationindia.org', 'https://img.freepik.com/free-vector/charity-logo-with-star-form_1025-231.jpg', 'Mumbai'),
(3, 'GiveIndia', 1999, 'Venkat Krishnan', 'Food Security, Emergency Response, Disaster relief', 'www.giveindia.org', '1st floor, Rigel, No. 15-19 Doddanekkundi, Marathahalli Outer Ring Road', 'info@giveindia.org', 'https://images-platform.99static.com//DSBeE8xWeBtjEqFrVBhHIq2v3oc=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/125/125151/attachment_125151152', 'Bengaluru'),
(4, 'Goonj', 1999, 'Anshu Gupta', 'Healthcare, Livelihood, Water, Sanitation, Environment', 'www.goonj.org', 'J-93, Sarita Vihar, New Delhi-110076', 'mail@goonj.org', 'https://media.istockphoto.com/id/1156391182/vector/house-holding-care-logo-vector-design-illustration.jpg?s=612x612&w=0&k=20&c=vuXC_Ds-8_zUYNl4bekuZFQ3UGojVRD6SrgClZyiM8Q=', 'mail@goonj.org');

-- --------------------------------------------------------

--
-- Table structure for table `retailler`
--

CREATE TABLE `retailler` (
  `id` int(11) NOT NULL,
  `shop_name` varchar(50) NOT NULL,
  `owner_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cont_no` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `retailler`
--

INSERT INTO `retailler` (`id`, `shop_name`, `owner_name`, `email`, `cont_no`, `address`) VALUES
(1, 'Karan Groceries', 'Karan Chandwani', 'karan@gmail.com', '9518373726', 'Mohammed Ali Road, Near Galaxy Apartment, Dharavi'),
(2, 'Rashid Groceries', 'Md. Rashid Aziz', 'rashid@gmail.com', '9518373726', 'Behram Baigh, New Link Road, Joeshgwari'),
(3, 'Hiten Groceries', 'Hiten Gerella', 'hiten@gmail.com', '9518373726', 'Anand Nagar, SV Road, Ulhasnagar'),
(4, 'Bhavesh Groceries', 'Bhavesh Madnani', 'bhavesh@gmail.com', '9518373726', 'Millat Nagar, Nr green Park, Andheri');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` varchar(30) NOT NULL,
  `ref` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `status`, `ref`) VALUES
(1, 'rashid@gmail.com', '12345', 'retailler', 0),
(2, 'karan@gmail.com', '12345', 'retailler', 0),
(3, 'cryinfo.mum@crymail.org', '12345', 'ngo', 1),
(4, 'info@smilefoundationindia.org\n', '12345', 'ngo', 2),
(5, 'info@giveindia.org', '12345', 'ngo', 3),
(6, 'mail@goonj.org', '12345', 'ngo', 4),
(7, 'hiten@gmail.com', '12345', 'retailler', 0),
(8, 'bhavesh@gmail.com', '12345', 'retailler', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doner_form`
--
ALTER TABLE `doner_form`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `retailler`
--
ALTER TABLE `retailler`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doner_form`
--
ALTER TABLE `doner_form`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `retailler`
--
ALTER TABLE `retailler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
