<?php

	//時間占(作夢時刻占)
	function dream_time_diviation(){
		//initialization variables
		minute	= 0;
		hour 	= 0;
		gram 	= 0;
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
        sixth_line = 0;
		six_lines  = array();

		//set variables for now
        hour 	= date('G');
        minute  = date('i');

		//取得上下卦、動爻
        gram = _get_dream_gram( hour, minute);
        
        //設定上下卦、動爻
		above = gram[0];
		below = gram[1];
		dynamic_line = gram[2];

		//設各爻陰陽
		six_lines = _get_six_line( above, below, dynamic_line);

		//取得本卦名
		gram_name[] = _six_lines_to_hexagram_name( six_lines);

		//動爻取卦
		dynamic_gram = _change_dynamic_line( six_lines);

		//取得動爻名
		gram_name[] = _six_lines_to_hexagram_name(dynamic_gram);

		return gram_name[0]+'之'+gram_name[1]+'卦';

    }

    //特定時間占
	function specified_time_diviation(){
		//initialization variables
        year    = 0;
        month   = 0;
        day     = 0;
		hour 	= 0;
		gram 	= 0;
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
		sixth_line = 0;
		six_lines  = array();

        //set variables for input
        // input(type,bit number,allow range);
        year    = input(INT,4,1900~2200);
        month   = input(INT,1~2,1~12);
        day     = input(INT,1~2,1~31);
		hour 	= input(INT,1~2,0~23);

		//取得上下卦、動爻
        gram = _get_minute_gram( year, month, day, hour);
        
        //設定上下卦、動爻
		above = gram[0];
		below = gram[1];
		dynamic_line = gram[2];

		//設各爻陰陽
		six_lines = _get_six_line( above, below, dynamic_line);

		//取得本卦名
		gram_name[] = _six_lines_to_hexagram_name( six_lines);

		//動爻取卦
		dynamic_gram = _change_dynamic_line( six_lines);

		//取得動爻名
		gram_name[] = _six_lines_to_hexagram_name(dynamic_gram);

		return gram_name[0]+'之'+gram_name[1]+'卦';

    }

    //生日標準西元
	function standard_AD_birthday_calculation(){
		//initialization variables
        year    = 0;
        month   = 0;
        day     = 0;
		hour 	= 0;
		gram 	= 0;
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
		sixth_line = 0;
		six_lines  = array();

        //set variables for input
        // input(type,bit number,allow range);
        year    = input(INT,4,1900~2200);
        month   = input(INT,1~2,1~12);
        day     = input(INT,1~2,1~31);
		hour 	= input(INT,1~2,0~23);

		//取得上下卦、動爻
        gram = _get_gram( year, month, day, hour);
        
        //設定上下卦、動爻
		above = gram[0];
		below = gram[1];
		dynamic_line = gram[2];

		//設各爻陰陽
		six_lines = _get_six_line( above, below, dynamic_line);

		//取得本卦名
		gram_name[] = _six_lines_to_hexagram_name( six_lines);

		//動爻取卦
		dynamic_gram = _change_dynamic_line( six_lines);

		//取得動爻名
		gram_name[] = _six_lines_to_hexagram_name(dynamic_gram);

		return gram_name[0]+'之'+gram_name[1]+'卦';

    }

    //生日靈數西元
    function spiritual_number_AD_birthday_calculation(){
		//initialization variables
        year    = 0;
        month   = 0;
        day     = 0;
		hour 	= 0;
		gram 	= 0;
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
		sixth_line = 0;
		six_lines  = array();

        //set variables for input
        // input(type,bit number,allow range);
        year    = input(INT,4,1900~2200);
        month   = input(INT,1~2,1~12);
        day     = input(INT,1~2,1~31);
        hour 	= input(INT,1~2,0~23);
        
        //calculate spiritual number
        year    = _spiritual_number_calculation(year);
        month   = _spiritual_number_calculation(month);
        day     = _spiritual_number_calculation(day);
        hour    = _spiritual_number_calculation(hour);

		//取得上下卦、動爻
        gram = _get_gram( year, month, day, hour);
        
        //設定上下卦、動爻
		above = gram[0];
		below = gram[1];
		dynamic_line = gram[2];

		//設各爻陰陽
		six_lines = _get_six_line( above, below, dynamic_line);

		//取得本卦名
		gram_name[] = _six_lines_to_hexagram_name( six_lines);

		//動爻取卦
		dynamic_gram = _change_dynamic_line( six_lines);

		//取得動爻名
		gram_name[] = _six_lines_to_hexagram_name(dynamic_gram);

		return gram_name[0]+'之'+gram_name[1]+'卦';

    }

    //生日民國
	function ROC_birthday_calculation(){
		//initialization variables
        year    = 0;
        month   = 0;
        day     = 0;
		hour 	= 0;
		gram 	= 0;
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
		sixth_line = 0;
		six_lines  = array();

        //set variables for input
        // input(type,bit number,allow range);
        year    = input(INT,4,1912~2200);
        month   = input(INT,1~2,1~12);
        day     = input(INT,1~2,1~31);
        hour 	= input(INT,1~2,0~23);
        
        //change year to ROC year
        year    = year -1911;

		//取得上下卦、動爻
        gram = _get_gram( year, month, day, hour);
        
        //設定上下卦、動爻
		above = gram[0];
		below = gram[1];
		dynamic_line = gram[2];

		//設各爻陰陽
		six_lines = _get_six_line( above, below, dynamic_line);

		//取得本卦名
		gram_name[] = _six_lines_to_hexagram_name( six_lines);

		//動爻取卦
		dynamic_gram = _change_dynamic_line( six_lines);

		//取得動爻名
		gram_name[] = _six_lines_to_hexagram_name(dynamic_gram);

		return gram_name[0]+'之'+gram_name[1]+'卦';

    }

    //生日陰曆
	function lunar_calendar_birthday_calculation(){
		//initialization variables
        year    = 0;
        month   = 0;
        day     = 0;
		time_period = 0;
		gram 	= 0;
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
		sixth_line = 0;
		six_lines  = array();

        //set variables for input
        // input(type,bit number,allow range);
        year    = input(INT,4,1900~2200);
        month   = input(INT,1~2,1~12);
        day     = input(INT,1~2,1~31);
        hour 	= input(INT,1~2,0~23);
        
        //西元轉陰曆
        //年 = 地支 子=1 丑=2 寅=3 卯=4 辰=5 巳=6 午=7 未=8 申=9 酉=10 戌=11 亥=12
        //時辰 與年計算順序相同
        lunar_year          = 
        lunar_month         =
        lunar_day           =
        lunar_time_period   =
		//取得上下卦、動爻
        gram = _get_gram( lunar_year, lunar_month, lunar_day, lunar_time_period);
        
        //設定上下卦、動爻
		above = gram[0];
		below = gram[1];
		dynamic_line = gram[2];

		//設各爻陰陽
		six_lines = _get_six_line( above, below, dynamic_line);

		//取得本卦名
		gram_name[] = _six_lines_to_hexagram_name( six_lines);

		//動爻取卦
		dynamic_gram = _change_dynamic_line( six_lines);

		//取得動爻名
		gram_name[] = _six_lines_to_hexagram_name(dynamic_gram);

		return gram_name[0]+'之'+gram_name[1]+'卦';

    }

    function _spiritual_number_calculation(input){
        //靈數計算用function
        //initialization variables
        output = 0;
        while( input >9){
            output += input %10;
            input = (input-input%10)/10;
        }
        output = output+ input;
        return output;
    }
    
    function _get_dream_gram( hour, minute){
		/*取得上下卦*/
		//initialization variables
		above = 0;
		below = 0;
		dynamic_line = 0;
		gram = array();
		
		//calculate above and below
		above = hour %8;
		below = ( hour+ minute)%8;
		
		//calculate dynamic_line
		dynamic_line = ( hour+ minute)%6;
		
		//check 
		if( above === 0 )
		{ above = 8;}
		if( below === 0 )
		{ below = 8;}
		if( dynamic_line ===0)
		{ dynamic_line = 6 ;}

		gram[]=( above, below, dynamic_line);
		
		return gram ;
		
		
	}

?>