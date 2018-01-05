<?php
/**
 * Plugin Name:       CF 7 Gutenberg
 * Plugin URI:        https://themeisle.com/plugins/orbit-fox-companion
 * Description:       Registers and handles the Gutenberg block for Contact Form 7 plugin
 * Version:           0.0.1
 * Author:            Andrei Lupu
 * Author URI:        https://themeisle.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       themeisle
 * Domain Path:       /languages
 * WordPress Available:  yes
 * Requires License:    no
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// call this only if Gutenberg is active
if ( function_exists( 'register_block_type' ) ) {
	// @TODO maybe wrap this into a function
	require_once dirname( __FILE__ ) . '/class-cf7-gutenberg-block-plugin.php';
	CF7_GutenbergBlockPlugin::instance();
}
