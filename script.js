 $(document).ready(function() { 
    const myLibrary = [];
    $("#submit").on("click", (e)=>{
      e.preventDefault();
      getInfo();
      showlibrary();
    });
    $("#showDialog").on("click", () => {
      const dialog = document.querySelector("#libraryDialog");
      dialog.showModal();
    });


    function getInfo(){    
      let newbook= new Book($("#name").val(), $("#author").val(), $("#numPages").val());
      addBookToLibrary(newbook);
      $("#libraryDialog").hide();
    }

    function Book(name, author, numPages) {
        // the constructor...
        this.name = name;
        this.author = author;
        this.numPages = numPages;
    }
      
    function addBookToLibrary(book) {
          myLibrary.splice(-1,0,book);
          console.log(myLibrary);
           
      }
    
    function showlibrary(){
      libraryTable = document.querySelector("#library");
      console.log(myLibrary);
      myLibrary.forEach((book) =>{
        tr = document.createElement("tr");
        const keys = Object.keys(book);
        for(let key in keys){
          td = document.createElement("td");
          console.log(book[keys[key]]);
          td.innerText = book[keys[key]];
          tr.appendChild(td);
        }
        libraryTable.appendChild(tr);
      });

    }

    const book1= new Book("Daily Bugle", "JJJ","20");
    addBookToLibrary(book1);
});
