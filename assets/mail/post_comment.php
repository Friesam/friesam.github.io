<?php
require('Persistence.php');

$db = new Persistence();
if( $db->add_comment($_POST) ) {
  header( 'Location: index.html' );
}
else {
  header( 'Location: index.html?error=Your comment was not posted due to errors in your form submission' );
}
?>