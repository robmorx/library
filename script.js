 $(document).ready(function() { 
    const myLibrary = [];
    $("#submit").on("click", getInfo);
    $("#showDialog").on("click", () => {
      $("#libraryDialog").showModal();
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
          myLibrary.splice(-1,0,book) 
      }
    
    function showlibrary(){
      libraryTable = document.querySelector("#library");
        
    }

    const book1= new Book("Daily Bugle", "JJJ","20");
    addBookToLibrary(book1);
});
