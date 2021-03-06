/**
 * "⊈"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'NotSubseteqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M6.36,16.873c0.48,0.072,0.912,0.072,1.08,0.072h6.385c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.369   c-0.144,0-0.768,0-1.392-0.12l-1.584,3.816h9.433c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H3.984L2.568,25.97   c-0.144,0.336-0.24,0.576-0.552,0.576c-0.288,0-0.48-0.216-0.48-0.48c0-0.24,1.2-3,1.416-3.504H1.32c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48h2.016l1.704-4.056C2.496,16.825,0,14.377,0,10.945c0-3.889,3.313-6.937,7.345-6.937h3.312l1.632-3.865   C12.385,0.048,12.505,0,12.649,0c0.288,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.144,0.456l-1.272,3.072h2.112   c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48h-2.52L6.36,16.873z M7.417,4.968c-3.72,0-6.457,2.736-6.457,6   c0,2.808,2.016,4.992,4.44,5.688l4.873-11.689H7.417z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "NotSubseteq" );

            opShape.translate( 6, 0 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );