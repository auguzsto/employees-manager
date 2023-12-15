<?php

require "vendor/autoload.php";
require "app/routes/routers.php";

use App\core\Migration;

    error_reporting(0); // SET 0 FOR PROD, SET -1 FOR DEVELOPEMENT
    date_default_timezone_set("America/Sao_Paulo"); // DEFAULT CONFIG HOURS
    Migration::auto("14122023_1834.sql");