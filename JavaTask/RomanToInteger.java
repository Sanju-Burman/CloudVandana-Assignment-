package Assignment.JavaTask;

//import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] arr){
        
        // For console input  
        //Scanner sc=new Scanner(System.in);
        
        //Task 2 : . Enter a Roman Number as input and convert it to an integer. (ex IX = 9)

        // For console input
        //String romanNo=sc.nextLine();
        
        String romanNo="L";
        System.out.println(romanNo+" in integer "+romanToInt(romanNo));
    }

    private static int romanToInt(String romanNo) {
        int len=romanNo.length();
        if (romanNo == null || len == 0) {
            return 0;
        }
        int [] nums=new int[len];

        for(int i=0;i<len;i++){
            char c=romanNo.charAt(i);
            switch (c) {
                case 'I':
                    nums[i]=1;
                    break;
                case 'V':
                    nums[i]=5;
                    break;
                case 'X':
                    nums[i]=10;
                    break;
                case 'L':
                    nums[i]=50;
                    break;
                case 'C':
                    nums[i]=100;
                    break;
                case 'D':
                    nums[i]=500;
                    break;
                case 'M':
                    nums[i]=1000;
            }
        }
        int result=0;
        
        for(int i=0;i<nums.length-1;i++){
            if(nums[i]<nums[i+1]){
                result-=nums[i];
            }else{
                result+=nums[i];
            }
        }

        return result+nums[nums.length-1];
    }
}
