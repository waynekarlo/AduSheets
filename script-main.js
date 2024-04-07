    // DECLARATIONS

    // USERNAME
    var Name="";
    function register()
    {
        
        Name = document.getElementById('Username').value;
        document.getElementById('GameNa').innerHTML= "Welcome, "+ Name;
        document.getElementById('DifficultyOptions').style.display = 'block';
    }
   
    // DIFFICULTY
    var x, y;
    function chooseDifficulty(difficulty){
        document.getElementById('OperationOptions').style.display = 'block';
        switch(difficulty){
            case 'easy':
                easy(x,y);
            break;

            case 'medium':
                //code
            break;

            case 'hard':
                //code      
            break;
        }   
    }               

    function chooseOperation(operation){   
        switch(operation){
            case 'addition':
                addition(x,y)
            break;

            case 'subtraction':
                //code
            break;

            case 'multiplication':
                //code
            break;
            
            case 'division':
                //code
            break;

            case 'nomials':
                //code
            break;
        }
    }
    
    function easy(x,y){
        x = 10;
        y = 10;
    }
    function medium(x,y){
        x = 30;
        y = 30;
    }
    function hard(x,y){
        x = 50;
        y = 50;
    }

    // GENERATOR
    var gen="";
    var num;
    function addition(x,y){
        
        for (ordinate=1;ordinate<=y;ordinate++){
            gen += '<tr>\n';
        
        for (abscissa=1;abscissa<=x;abscissa++){
            num++
            gen += '<td><div id="sheet' + num + '</div></td>\n';
        }
        gen+= '<tr>';
        document.getElementById('tbl').innerHTML=gen;
        console.log(gen);
    }

    // FUNCTIONALITIES
    function calculateTotalScore(){
        
    }

    function showSolution(){
        
    }

    function solvingTimer(){

    }

    function recordAttemmpt(){

    }   
}