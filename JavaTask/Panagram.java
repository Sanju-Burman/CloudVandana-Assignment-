package Assignment.JavaTask;

//import java.util.Scanner;

public class Panagram {
    public static void main(String[] arr){
        // For console input  
        //Scanner sc=new Scanner(System.in);
        
        //Task 3 : Check if the input is pangram or not.

        // For console input
        //String poems=sc.nextLine();
    
        String poems="qazxswedcvfrtgbnhyujmkiolp";
        System.out.println(isPanagram(poems));
    }

    private static boolean isPanagram(String poems) {
        int len=poems.length();

        if(len<26) return false;

        boolean alphabet[]= new boolean[26];
        for(int i=0;i<alphabet.length;i++){
            alphabet[i]= false;
        }
        for(int i=0;i<len;i++){
            char c=poems.charAt(i);
            if(c>='a'&&c<='z'){
                alphabet[c-'a']=true;
            }else if(c>='A'&&c<='Z'){
                alphabet[c-'A']=true;
            }
        }
        for(int i=0;i<alphabet.length;i++){
            if(!alphabet[i]){
                return false;
            }
        }
        return true;
    }
}
