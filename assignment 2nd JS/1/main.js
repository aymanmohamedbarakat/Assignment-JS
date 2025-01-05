let userDegree = prompt("Please enter your degree");

if (userDegree >= 0 ) {
    if (userDegree <= 100) {
        if (userDegree < 50 ){
            document.write("انت راسب");
        }else{
            if( userDegree < 75){
                document.write("مقبول");
            }else{
                if (userDegree < 85){
                    document.write("جيد");
                } else {
                    if (userDegree < 90){
                        document.write(" جيد جيدا");
                    }else{
                        document.write("ممتاز");
                    }
                }
            }
        }
    }
    else {
        document.write("عذرا هذا الرقم غير صحيح");
    }

} else {
    document.write("عذرا هذا الرقم غير صحيح");
}

