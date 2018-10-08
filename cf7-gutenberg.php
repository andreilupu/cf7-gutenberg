<?php
/**
 * Plugin Name:       Contact Form 7 - Gutenberg block
 * Plugin URI:        https://github.com/Codeinwp/cf7-gutenberg
 * Description:       Registers and handles the Gutenberg block for Contact Form 7 plugin
 * Version:           1.0.0
 * Author:            Andrei Lupu
 * Author URI:        https://themeisle.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       cf-7-gutenberg
 * Domain Path:       /languages
 * WordPress Available:  yes
 * Requires License:    no
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action(
	'plugins_loaded',
	function () {
		// call this only if Gutenberg is active
		if ( function_exists( 'register_block_type' ) ) {
			require_once dirname( __FILE__ ) . '/class-cf7-gutenberg-block-plugin.php';
			CF7_GutenbergBlockPlugin::instance();
		}
	}
);

