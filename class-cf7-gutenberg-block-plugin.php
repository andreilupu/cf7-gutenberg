<?php
defined( 'ABSPATH' ) || exit;

class CF7_GutenbergBlockPlugin {

	/**
	 * @var CF7_GutenbergBlockPlugin
	 */
	public static $instance = null;

	/**
	 * Add all the hooks required for building a block
	 */
	function init() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'gutenberg_enqueue_block_editor_assets' ) );
		add_action( 'init', array( $this, 'register_block' ) );
	}

	/**
	 * Enqueue block assets which will be loaded in the editor
	 */
	function gutenberg_enqueue_block_editor_assets() {
		wp_enqueue_script(
			'gutenberg-cf7',
			plugins_url( '/block-esnext/block.build.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
			filemtime( plugin_dir_path( __FILE__ ) . '/block-esnext/block.build.js' )
		);
	}

	function gutenberg_enqueue_block_assets() {
		wp_enqueue_style(
			'gutenberg-cf7',
			plugins_url( 'style.css', __FILE__ ),
			array( 'wp-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
		);
	}

	function register_block() {
		register_block_type(
			'orbitfox/contact-form-7', array(
				'render_callback' => array( $this, 'render_block' ),
				'attributes' => array(
					'formID' => array(
						'type' => 'number',
					),
					'title' => array(
						'type' => 'string',
					),
				),
			)
		);
	}

	/**
	 * The output of the block.
	 * Just a simple echo of the cf7 shortcode
	 *
	 * @param $attributes
	 * @param $content
	 *
	 * @return string
	 */
	function render_block( $attributes, $content ) {
		$id = $attributes['formID'];

		if ( empty( $id ) || $id === 'none' ) {
			return ''; // no id = no fun
		}

		$title = isset( $attributes['title'] ) ? 'title="' . $attributes['title'] . '"' : '';

		return '[contact-form-7 id="' . $id . '" ' . $title . ']';
	}

	/**
	 * @static
	 * @since 1.0.0
	 * @access public
	 * @return CF7_GutenbergBlockPlugin
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
			self::$instance->init();
		}

		return self::$instance;
	}

	/**
	 * Throw error on object clone
	 *
	 * The whole idea of the singleton design pattern is that there is a single
	 * object therefore, we don't want the object to be cloned.
	 *
	 * @access public
	 * @since 1.0.0
	 * @return void
	 */
	public function __clone() {
		// Cloning instances of the class is forbidden.
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'cf-7-gutenberg' ), '1.0.0' );
	}

	/**
	 * Disable unserializing of the class
	 *
	 * @access public
	 * @since 1.0.0
	 * @return void
	 */
	public function __wakeup() {
		// Unserializing instances of the class is forbidden.
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'cf-7-gutenberg' ), '1.0.0' );
	}
}
