LOVE YOU <3

-- LA PÁGINA

Para ver la página hacer doble click sobre index.html
A la izquierda verás unos botones para ordenar y filtrar las waifus y a la derecha las waifus en sí.
Si se pulsa un filtro se mostrarán solo las waifus que tengan el filtro, si se pulsan varios se mostrarán las waifus que tengan al menos uno de los filtros seleccionados. En cada filtro se indica cuántas waifus lo tienen con un número entre paréntesis.
Las waifus tienen una imagen principal, pero debajo pueden tener otras que al pulsar en ellas se intercambian con la principal para que puedas verlas.


-- AÑADIR IMÁGENES

Las imágenes que se quieran añadir se pondrán en la carpeta "images", con nombres sin espacios ni caracteres raros (just in case)


-- AÑADIR DATOS DE WAIFUS

Para añadir una nueva waifu con sus datos, ir a la carpeta "js", dentro hay un archivo llamado "index.js", botón derecho sobre él y abrir con bloc de notas a no ser que se tenga algo más guay como notepad++. En las primeras líneas veremos los datos de las WAIFUS, para añadir una nueva usar siempre la misma estructura.

Cada waifu está en un bloque entre {}, los bloques van separados por comas. Ejemplo:

{
	"id": 1,
	"name": "Caitlyn",
	"age": 22,
	"show": "Arcane",
	"main_image": "caitlyn.jpg",
	"alternative_images": ["caitlyn-2.jpg", "caitlyn-3.jpg"],
	"filters": ["blue-eyes", "blue-hair"]
}

Para añadir una nueva, nos vamos al último bloque, antes del "]", ponemos una coma y pegamos un bloque como el de arriba y editamos los datos. Los textos tienen que ir entre comillas dobles y las listas de elementos entre []. 

Descripción de cada apartado:
- id -> número de ordenación por defecto
- name -> nombre de la waifu
- age -> edad de la waifu (se pone entre paréntesis al lado del nombre)
- show -> nombre del show / manga al que pertenece
- main_image -> imagen que se muestra en grande, es el nombre que hayamos puesto al ponerla en la carpeta images, extensión incluida.
- alternative_images -> lista de imágenes alternativas, los nombres son los que tengan en la carpeta images, extensión incluida. Al ser una lista siempre se tiene que poner entre [], aunque solo haya una imagen como en el caso de Adora.
- filters -> lista de filtros para las waifus. Se ponen dinámicamnete, pueden tener el nombre que quieras siempre y cuando no haya espacios, usa los ejemplos de referencia. Al ser una lista siempre se tiene que poner entre [], aunque solo haya uno.

UPDATE!! Ahora puedes definir grupos de filtros :D necesitan una key y un texto para mostrar, la key se pondrá al final de cada filtro para indicar su grupo, ejemplos en el js :)
Los filtros se definen en FILTER_GROUPS, justo debajo de las waifus

Todos los campos son opcionales, si no quieres poner, por ejemplo, la edad, no pongas la línea, como en el caso de Hanna. Si no se puede ordenar por un campo se dejan para el final.

