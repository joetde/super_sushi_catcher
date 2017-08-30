
from PIL import Image
from os import path, listdir

PREFIX = "seq_"
IMG_DIR = path.join('res', 'sprite')

image_paths = listdir(IMG_DIR)
seq_image_paths = filter(lambda n: n.startswith(PREFIX), image_paths)

seq_images = [Image.open(path.join(IMG_DIR, i)) for i in seq_image_paths]
image_width, image_height = seq_images[0].size

out_img = Image.new('RGBA', (image_width * len(seq_images), image_height))
w = 0
for i in seq_images:
    out_img.paste(i, (w, 0))
    w += image_width

out_img.save(path.join(IMG_DIR, "test.png"))
