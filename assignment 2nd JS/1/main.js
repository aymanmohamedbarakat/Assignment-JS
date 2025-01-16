let userDegree = prompt("Please enter your degree");

if (userDegree > 0) {
  if (userDegree >= 50) {
    if (userDegree >= 60) {
      if (userDegree >= 80) {
        if (userDegree >= 90) {
          if (userDegree <= 100) {
            document.write("ممتاز");
          } else {
            document.write("invaild number");
          }
        } else {
          document.write("جيد جدا ");
        }
      } else {
        document.write("جيد ");
      }
    } else {
      document.write("مقبول");
    }
  } else {
    document.write("faild");
  }
} else {
  document.write("invaild number");
}
