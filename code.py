
# Question 1: Find the largest number in an array

def find_largest(arr):
    if not arr:
        return None 
    #taking first element as biggest
    max_num = arr[0]

    for num in arr:
        if num > max_num:
            max_num = num

    return max_num

def question1():
   arr = list(map(int, input("Enter the elements of the array: ").split()))
   print("Largest element:", find_largest(arr))

if __name__ == "__main__":
    question1()



# Question 2: Find greatest between three integers

def greatest_int():
    n1 = int(input("enter first number: "))
    n2 = int(input("enter second number: "))
    n3 = int(input("enter third number: "))
    
    if n1 >= n2 and n1 >= n3:
        greatest = n1
    elif n2 >= n1 and n2 >= n3:
        greatest = n2
    else:
        greatest = n3
        
    print("The greatest number is:", greatest)

if __name__ == "__main__":
    greatest_int()
