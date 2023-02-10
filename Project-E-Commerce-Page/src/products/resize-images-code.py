from PIL import Image
import os

directory = 'E:\Gaza Sky Geeks\React\GazaSkyGeeks-React\Project-E-Commerce-Page\src\products\Apparels\Shorts'
directory=directory.replace('\\','/')
new_width = 400
new_height = 600

if not os.path.isdir(directory):
    print(f"Error: The directory '{directory}' does not exist.")
    exit()


j = 0
for filename in os.listdir(directory):
    if filename.endswith(".jpg") or filename.endswith(".png"):
        filepath = os.path.join(directory, filename)
        filepath = filepath.replace('\\','/')
        print(filename)
        try:
            with Image.open(filepath) as im:
                # Resize the image
                im = im.resize((new_width, new_height), Image.ANTIALIAS)
                im.save(filepath)
                j+=1
        except FileNotFoundError:
            print(f"Error: The file '{filepath}' does not exist.")
