 $(document).ready(function() { 
    const myLibrary = [];
    $("#submit").on("click", (e)=>{
      e.preventDefault();
      getInfo();
    });
    $("#showDialog").on("click", () => {
      const dialog = document.querySelector("#libraryDialog");
      dialog.showModal();
    });


    function getInfo(){    
      let newbook= new Book($("#name").val(), $("#author").val(), $("#numPages").val());
      
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
          showlibrary(); 
      }
    
    function showlibrary(){
      libraryTable = document.querySelector("#library");
      
      for (let book in myLibrary){
        tr = document.createElement("tr");
        const keys = Object.keys[book];
        for(let key in keys){
          td = document.createElement("td");
          td.innetText = book.key;
          tr.appendChild(td);
        }
        libraryTable.appendChild(tr);
      }

    }

    const book1= new Book("Daily Bugle", "JJJ","20");
    addBookToLibrary(book1);
});
