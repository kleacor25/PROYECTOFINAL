# Proyecto de ejemplo VUE CLI

Debe tener previamente instalado NodeJs y NPM
   

### 1. Instalación de Vue CLI
```console
~$ npm install -g @vue/cli
```

### 2. Creación del proyecto
```console
~$ vue create proyecto
```


### 3. Instalando dependencias
```console
~$ npm install
```

### 4. Ejecutar servidor de pruebas (compila y recarga en caliente)
```console
~$ npm run serve
```

### 5. Compila y minifica para producción
```console
~$ npm run build
```

# Boostrap 5
Bootstrap 5 ya no necesita jQuery. No requiere una biblioteca como **bootstrap-vue**

```console
~$ npm install --save bootstrap
```


```javascript
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
```  

# Font Awesome Icon
```console
~$ npm i --save @fortawesome/fontawesome-svg-core

~$ npm i --save @fortawesome/free-solid-svg-icons
~$ npm i --save @fortawesome/free-regular-svg-icons
~$ npm i --save @fortawesome/free-brands-svg-icons
```

Agregando iconos en el componente
```javascript
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

export default {  
  components: {
    FontAwesomeIcon
  }
}
```
Mostrando el icono en el HTML
```javascript
<font-awesome-icon icon="fa-solid fa-user-secret" /> 
```

# Router
Instalación
```console
~$ npm install vue-router@4
```
Agregar los componentes a las rutas

# Axios
```console
~$ npm install axios
```