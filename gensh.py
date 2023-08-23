import random

def generate_unique_box_shadows(n):
    generated = set()

    while len(generated) < n:
        h_offset = random.randint(1, 3000)
        v_offset = random.randint(1, 3000)

        # Check if the combination is unique
        if (h_offset, v_offset) not in generated:
            generated.add((h_offset, v_offset))

    return [f"{h}px {v}px #fff" for h, v in generated]

# Generate 100 unique box shadows
box_shadows = generate_unique_box_shadows(25)
css_box_shadows = ",\n        ".join(box_shadows)
print(css_box_shadows)