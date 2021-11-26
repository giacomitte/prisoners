name = str(input('Enter Your Name:'))
mark1 = int(input('Enter First Mark:'))
mark2 = int(input('Enter Second Mark:'))
mark3 = int(input('Enter Third Mark:'))

average = mark1 + mark2 + mark3 / 3

if average >= 90:
    print('Exelent')
elif 90 > average >= 80:
    print('Very Good')
elif 80 > average >= 70:
    print('Good')
elif average > 60:
    print ('Pass')
else:
    print('Failed')