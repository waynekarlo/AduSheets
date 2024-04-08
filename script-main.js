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
    function chooseDifficulty(difficulty){
        document.getElementById('OperationOptions').style.display = 'block';
        switch(difficulty)
        {
            case 'easy':
                easy(3,6);
                document.getElementById('btnMedium').style.display = 'none';
                document.getElementById('btnHard').style.display = 'none';
            break;

            case 'medium':
                medium(4,5);   
                document.getElementById('btnEasy').style.display = 'none';
                document.getElementById('btnHard').style.display = 'none';
            break;

            case 'hard':
                hard(5,9);
                document.getElementById('btnEasy').style.display = 'none';
                document.getElementById('btnMedium').style.display = 'none';
                    
            break;
        }
           
    }               

    function chooseOperation(operation)
    {   
        switch(operation)
        {
            case 'addition':
                addition()
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            break;

            case 'subtraction':
                //code
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnAdd').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            break;

            case 'multiplication':
                //code
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnAdd').style.display = 'none';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            break;

            
            case 'division':
                //code
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnAdd').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            break;

            case 'nomials':
                //code
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnAdd').style.display = 'none';
            break;
        }
    }
    function easy(x,y) {
        for (ordinate=1;ordinate<=y;ordinate++)
        {
        gen+='<tr>\n';
    
            for (abscissa=1;abscissa<=x;abscissa++)
            {
                num++
                gen+='<td><div class="tbl" id="sheet' + num + '"></div></td>\n';
            }
            gen+='<tr>\n';
        
            document.getElementById('tbl').innerHTML=gen;
            
            console.log(gen);
        }
    }
    function medium(x,y) {
        for (ordinate=1;ordinate<=y;ordinate++)
        {
        gen+='<tr>\n';
    
            for (abscissa=1;abscissa<=x;abscissa++)
            {
                num++
                gen+='<td><div class="tbl" id="sheet' + num + '"></div></td>\n';
            }
            gen+='<tr>\n';
        
            document.getElementById('tbl').innerHTML=gen;
            
            console.log(gen);
        }
    }
    function hard(x,y) {
        for (ordinate=1;ordinate<=y;ordinate++)
        {
        gen+='<tr>\n';
    
            for (abscissa=1;abscissa<=x;abscissa++)
            {
                num++
                gen+='<td><div class="tbl" id="sheet' + num + '"></div></td>\n';
            }
            gen+='<tr>\n';
        
            document.getElementById('tbl').innerHTML=gen;
            
            console.log(gen);
        }
    }
    // GENERATOR
    
    function addition()
    {
        
    }
    function subtraction()
    {
        
    }
    function multiplication()
    {
        
    }
    function division()
    {
        
    }
    function nomials()
    {
        
    }
    // FUNCTIONALITIES
    var gen="";
    var num=0;
    function Start()
    {
        document.getElementById('hidesheet').style.display='block';
        document.getElementById('OperationOptions').style.display='none';
        document.getElementById('DifficultyOptions').style.display='none';
        document.getElementById('StartButton').style.display = 'none';
    }
    
    function calculateTotalScore()
    {
        
    }

    function showSolution()
    {
        
    }

    function solvingTimer()
    {

    }

    function recordAttemmpt()
    {

    }   
