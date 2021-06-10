warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 2422253..7eacec8 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -9,13 +9,22 @@[m [mclass App extends Component {[m
       ][m
     }[m
   }[m
[31m-[m
[32m+[m[32m//Ao apertar botão, adiciona ao array 'lista' um elemento objeto com id, título e corpo.[m
   criaLista = () => {[m
     const {listas} = this.state[m
[31m-    listas.push({listas, id: listas.length+1, titulo: `Lista ${listas.length+1} - Clique para alterar`, corpo: 'Clique para adicionar texto'})[m
[32m+[m[32m    listas.push({[m
[32m+[m[32m      listas, id: listas.length,[m[41m [m
[32m+[m[32m      titulo: `Lista ${listas.length+1} - Clique para alterar`,[m[41m [m
[32m+[m[32m      corpo: 'Digite o texto aqui',[m
[32m+[m[32m    })[m
     this.setState({ listas });[m
   }[m
 [m
[32m+[m[32m  criaCartao = () => {[m
[32m+[m[32m    const {listas} = this.state[m
[32m+[m[41m  [m
[32m+[m[32m  }[m
[32m+[m
   render() {[m
     const {listas} = this.state[m
     return ([m
[36m@@ -23,11 +32,13 @@[m [mclass App extends Component {[m
         {listas.map(item => ([m
           <div key={item.id} className='caixa'>[m
             <h3 contentEditable="true" suppressContentEditableWarning='true'>{item.titulo}</h3>[m
[31m-            <span >{item.corpo}</span>[m
[32m+[m[32m            <span contentEditable="true" suppressContentEditableWarning='true'>{item.corpo}</span>[m
[32m+[m[32m            <br></br>[m
[32m+[m[32m            <button id={item.id} className='btnNovaLista' onClick={this.criaCartao}>Adicionar Cartão</button>[m
           </div>[m
         ))}[m
           [m
[31m-        <button onClick={this.criaLista}>[m
[32m+[m[32m        <button onClick={this.criaLista} className='btnNovaLista'>[m
           Criar Lista[m
         </button>[m
 [m
