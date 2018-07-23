<?php

//生日陰曆 (這在2給過  但在年和時間有調整)
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
    lunar_year          = 
    lunar_month         =
    lunar_day           =
    /*年、小時轉地支
      年 = 地支 子=1 丑=2 寅=3 卯=4 辰=5 巳=6 午=7 未=8 申=9 酉=10 戌=11 亥=12
      時辰 與年計算順序相同*/
    lunar_year          = _earthly_branches_to_number(lunar_year);
    lunar_time_period   = _hour_to_lunar_time_period(hour);

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

function _earthly_branches_to_number(input){

    //variables initialization
    output = 0;
    if(strpos ($pageURL, '子'))
    {
        output = 1;
    }
    if(strpos ($pageURL, '丑'))
    {
        output = 2;
    }
    if(strpos ($pageURL, '寅'))
    {
        output = 3;
    }
    if(strpos ($pageURL, '卯'))
    {
        output = 4;
    }
    if(strpos ($pageURL, '辰'))
    {
        output = 5;
    }
    if(strpos ($pageURL, '巳'))
    {
        output = 6;
    }
    if(strpos ($pageURL, '午'))
    {
        output = 7;
    }
    if(strpos ($pageURL, '未'))
    {
        output = 8;
    }
    if(strpos ($pageURL, '申'))
    {
        output = 9;
    }
    if(strpos ($pageURL, '酉'))
    {
        output = 10;
    }
    if(strpos ($pageURL, '戌'))
    {
        output = 11;
    }
    if(strpos ($pageURL, '亥'))
    {
        output = 12;
    }
    return output;  

}
function _hour_to_lunar_time_period(hour){
    //variables initialization
    lunar_time_period = 0;
    switch(hour){
        case 23:
        case 0:
            lunar_time_period = 1;
            break;
        case 1:
        case 2:
            lunar_time_period = 2;
            break;
        case 3:
        case 4:
            lunar_time_period = 3;
            break;
        case 5:
        case 6:
            lunar_time_period = 4;
            break;
        case 7:
        case 8:
            lunar_time_period = 5;
            break;
        case 9:
        case 10:
            lunar_time_period = 6;
            break;
        case 11:
        case 12:
            lunar_time_period = 7;
            break;
        case 13:
        case 14:
            lunar_time_period = 8;
            break;
        case 15:
        case 16:
            lunar_time_period = 9;
            break;
        case 17:
        case 18:
            lunar_time_period = 10;
            break;
        case 19:
        case 20:
            lunar_time_period = 11;
            break;
        case 21:
        case 22:
            lunar_time_period = 12;
            break;       
    }
    return lunar_time_period;
}

?>