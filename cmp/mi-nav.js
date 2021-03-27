/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol type="A">
        <li>
          <p><a href="/index.html">Inicio</a></p>
        </li>
        <li>
          <p><a href="/b_sw.html">Software a instalar</a></p>
        </li>
        <li>
          <details>
            <summary>
              <h3>Introducción a HTML5</h3>
            </summary>
            <ol>
              <li><p><a href="/c_html/1_SGML.html">SGML</a></p></li>
              <li>
                <p><a href="/c_html/2_comentarios.html">Comentarios</a></p>
              </li>
              <li><p><a href="/c_html/3_doctype.html">DOCTYPE</a></p></li>
              <li><p><a href="/c_html/4_elementos.html">Elementos</a></p></li>
              <li><p><a href="/c_html/5_atributos.html">Atributos</a></p></li>
              <li>
                <p>
                  <a href="/c_html/6_con_contenido.html">Elementos con
                    contenido</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/7_sin_contenido.html">Elementos sin
                    contenido</a>
                </p>
              </li>
              <li>
                <p><a href="/c_html/8_padres.html">Elementos padres</a></p>
              </li>
              <li><p><a href="/c_html/9_hijos.html">Elementos hijos</a></p></li>
              <li>
                <p>
                  <a href="/c_html/10_html.html">El elemento
                    <strong>html</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/11_head.html">El elemento
                    <strong>head</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/12_codificacion.html">Codificación de
                    caracteres</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/13_viewport.html">El metadato
                    <strong>viewport</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/14_title.html">El elemento
                    <strong>title</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/15_body.html">El elemento
                    <strong>body</strong></a>
                </p>
              </li>
              <li>
                <p><a href="/c_html/16_fraseo.html">Elementos de fraseo</a></p>
              </li>
              <li>
                <p>
                  <a href="/c_html/17_h1.html">El elemento
                    <strong>h1</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/18_p.html">El elemento <strong>p</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/19_cierran_p.html">Elementos que cierran
                    <strong>p</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/20_footer.html">El elemento
                    <strong>footer</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_html/21_referencias.html">Referencias de
                    caracteres</a>
                </p>
              </li>
              <li><p><a href="/c_html/22_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Introducción a CSS3</h3>
            </summary>
            <ol>
              <li><p><a href="/d_css/1_CSS.html">CSS</a></p></li>
              <li>
                <p>
                  <a href="/d_css/2_style.html">El Elemento <strong>style</strong></a>
                </p>
              </li>
              <li><p><a href="/d_css/3_comentarios.html">Comentarios</a></p></li>
              <li><p><a href="/d_css/4_reglas.html">Reglas de estilo</a></p></li>
              <li><p><a href="/d_css/5_selectores.html">Selector de tipo</a></p></li>
              <li><p><a href="/d_css/6_propiedades.html">Propiedades</a></p></li>
              <li><p><a href="/d_css/7_fonts.html">Fonts</a></p></li>
              <li>
                <p>
                  <a href="/d_css/8_font-family.html">La propiedad
                    <strong>font-family</strong></a>
                </p>
              </li>
              <li><p><a href="/d_css/9_colores.html">Colores en CSS</a></p></li>
              <li>
                <p>
                  <a href="/d_css/10_color.html">La propiedad
                    <strong>color</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/d_css/11_background-color.html">La propiedad
                    <strong>background-color</strong></a>
                </p>
              </li>
              <li><p><a href="/d_css/12_fondo.html">Fondo de la página</a></p></li>
              <li><p><a href="/d_css/13_custom.html">Custom properties</a></p></li>
              <li><p><a href="/d_css/14_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Modelo de cajas de CSS</h3>
            </summary>
            <ol>
              <li><p><a href="/e_cajas/1_div.html">El elemento <strong>div</strong></a></li>
              <li><p><a href="/e_cajas/2_span.html">El elemento <strong>span</strong></a></li>
              <li><p><a href="/e_cajas/3_display.html">La propiedad <strong>display</strong></a></li>
              <li><p><a href="/e_cajas/4_ejemplo_display.html">Ejemplo de <strong>display</strong></a></li>
              <li><p><a href="/e_cajas/5_tamanos.html">Tamaños y distancias en CSS</a></li>
              <li><p><a href="/e_cajas/6_cajas.html">Cajas</a></li>
              <li><p><a href="/e_cajas/7_ejemplo_cajas.html">Ejemplo de cajas</a></li>
              <li><p><a href="/e_cajas/8_box-sizing.html">La propiedad <strong>box-sizing</strong></a></li>
              <li><p><a href="/e_cajas/9_ejemplo-box-sizing.html">Ejemplo de <strong>box-sizing</strong></a></li>
              <li><p><a href="/e_cajas/10_margenes.html">Márgenes</a></li>
              <li><p><a href="/e_cajas/11_ejemplo_margenes.html">Ejemplo de márgenes</a></li>
              <li><p><a href="/e_cajas/12_relleno.html">Relleno</a></li>
              <li><p><a href="/e_cajas/13_ejemplo_relleno.html">Ejemplo de relleno</a></li>
              <li><p><a href="/e_cajas/14_partes_borde.html">Partes de un borde</a></li>
              <li><p><a href="/e_cajas/15_bordes.html">Propiedades para bordes</a></li>
              <li><p><a href="/e_cajas/16_esquinas_redondas.html">Esquinas redondas</a></li>
              <li><p><a href="/e_cajas/17_ejemplo_borde.html">Ejemplo de borde</a></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Posicionamiento con CSS3</h3>
            </summary>
            <ol>
              <li><p><a href="/f_posicionamiento/1_propiedades.html">Propiedades de posicionamiento</a></p></li>
              <li><p><a href="/f_posicionamiento/2_position.html">La propiedad <strong>position</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/3_ejemplo_fixed.html">Ejemplo de <strong>fixed</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/4_ejemplo_relative.html">Ejemplo de <strong>relative</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/5_ejemplo_absolute.html">Ejemplo de <strong>absolute</strong></a></p></li>
              <li><p><a href="/f_posicionamiento/6_ejemplo_sticky.html">Ejemplo de <strong>sticky</strong></a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Selectores de CSS3</h3>
            </summary>
            <ol>
              <li><p><a href="/g_selectores/1_todos.html">Selector <strong>*</strong></a></p></li>
              <li><p><a href="/g_selectores/2_id.html">Selector <strong>#</strong>identificador</a></p></li>
              <li><p><a href="/g_selectores/3_class.html">Selector <strong>.</strong>clase</a></p></li>
              <li><p><a href="/g_selectores/4_hijo.html">Selector <em>sel1</em> <strong>&gt;</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/5_descendiente.html">Selector con descendientes</a> <em>sel1</em> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/6_siguiente.html">Selector <em>sel1</em> <strong>+</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/7_posterior.html">Selector <em>sel1</em> <strong>~</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/8_lista.html">Lista de selectores <em>sel1</em> <strong>,</strong> <em>sel2</em></a></p></li>
              <li><p><a href="/g_selectores/9_active.html">Selector <strong>:active</strong></a></p></li>
              <li><p><a href="/g_selectores/10_focus.html">Selector <strong>:focus</strong></a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Formularios</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/h_formularios/1_recomendaciones.html">Recomendaciones</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_formularios/2_formulario.html">Formulario</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Juegos con Emojis</h3>
            </summary>
            <ol>
              <li><p><a href="/i_juegos/1_sprites.html">Sprites</a></p></li>
              <li><p><a href="/i_juegos/2_anima_horizontal.html">Animación horizontal</a></p></li>
              <li><p><a href="/i_juegos/3_anima_recta.html">Animación recta</a></p></li>
              <li><p><a href="/i_juegos/4_ondula.html">Ondula</a></p></li>
              <li><p><a href="/i_juegos/5_gira.html">Gira</a></p></li>
              <li><p><a href="/i_juegos/6_mueve_botones.html">Mueve con botones</a></p></li>
              <li><p><a href="/i_juegos/7_choques.html">Detecta colisiones</a></p></li>
              <li><p><a href="/i_juegos/8_sonrie.html">Haz algo si chocas</a></p></li>
              <li><p><a href="/i_juegos/9_mueve_aleatorio.html">Que se mueva como quiera</a></p></li>
              <li><p><a href="/i_juegos/10_custom.html">Custom elements</a></p></li>
              <li><p><a href="/i_juegos/11_asociaciones.html">Asociaciones</a></p></li>
              <li><p><a href="/i_juegos/12_polimorfismo.html">Polimorfismo</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Adornos</h3>
            </summary>
            <ol>
              <li><p><a href="/j_adornos/1_recta.html">Adorno horizontal</a></p></li>
              <li><p><a href="/j_adornos/2_espiral.html">Adorno en espiral</a></p></li>
            </ol>
          </details>
        </li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);