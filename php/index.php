<?php
include 'include/header.php';
$uri_parts = explode('/', $_SERVER['REQUEST_URI']);
$PAGE = array_pop($uri_parts);
switch ($_GET['page']) {
    case 'home':
        include 'home.php';
        break;
    case 'products':
        include 'products.php';
        break;
    case 'users':
        include 'users.php';
        break;
    default:
        echo ' <h1>404:Page Not Found</h1>';
}

echo '</pre>';
include 'include/footer.php';