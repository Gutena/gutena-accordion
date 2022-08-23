<?php // @codingStandardsIgnoreLine
/**
 * Plugin Name:     Gutena Accordion
 * Description:     Accordion Block by Gutena
 * Version:         1.0.1
 * Author:          ExpressTech
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutena-accordion
 *
 * @package         gutena-accordion
 */

defined( 'ABSPATH' ) || exit;

/**
 * Abort if the class is already exists.
 */
if ( ! class_exists( 'Gutena_Accordion' ) ) {

	/**
	 * Gutena Newsletter class.
	 *
	 * @class Main class of the plugin.
	 */
	class Gutena_Accordion {

		/**
		 * Plugin version.
		 *
		 * @var string
		 */
		public $version = '1.0.1';

		/**
		 * Instance of this class.
		 *
		 * @since 1.0.0
		 * @var object
		 */
		protected static $instance;

		/**
		 * Get the singleton instance of this class.
		 *
		 * @since 1.0.0
		 * @return Gutena_Accordion
		 */
		public static function get() {
			if ( ! ( self::$instance instanceof self ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			add_action( 'init', [ $this, 'register' ] );
			add_filter( 'block_categories_all', [ $this, 'register_category' ], 10, 2 );
		}

		/**
		 * Register required functionalities.
		 */
		public function register() {
			register_block_type( __DIR__ . '/build', [
				'render_callback' => [ $this, 'render_block' ],
			]  );
		}

		/**
		 * Render Gutena Newsletter field block.
		 */
		public function render_block( $attributes, $content, $block ) {
			return sprintf(
				'<style id="dynamic-%1$s">.gutena-accordion-block-%1$s { %2$s }</style> %3$s',
				$attributes['uniqueId'],
				$this->render_css( $attributes['blockStyles'] ),
				$content
			);
		}

		/**
		 * Generate dynamic styles
		 *
		 * @param array $styles
		 * @return string
		 */
		private function render_css( $styles ) {
			$style = [];
			foreach ( (array) $styles as $key => $value ) {
				$style[] = $key . ': ' . $value;
			}

			return join( ';', $style );
		}

		/**
		 * Register block category.
		 */
		public function register_category( $block_categories, $editor_context ) {
			$fields = wp_list_pluck( $block_categories, 'slug' );
			
			if ( ! empty( $editor_context->post ) && ! in_array( 'gutena', $fields, true ) ) {
				array_push(
					$block_categories,
					[
						'slug'  => 'gutena',
						'title' => __( 'Gutena', 'gutena-accordion' ),
					]
				);
			}

			return $block_categories;
		}
	}
}

/**
 * Check the existance of the function.
 */
if ( ! function_exists( 'gutena_accordion_init' ) ) {
	/**
	 * Returns the main instance of Gutena_Accordion to prevent the need to use globals.
	 *
	 * @return Gutena_Accordion
	 */
	function gutena_accordion_init() {
		return Gutena_Accordion::get();
	}

	// Start it.
	gutena_accordion_init();
}