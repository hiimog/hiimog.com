import os
import pathlib

Path = pathlib.Path


def main() -> None:
    this_script = Path(__file__)
    this_script_dir = this_script.parent
    image_links_dir = this_script_dir / Path("blog/public/images")
    app_dir = this_script_dir / Path("blog/src/app")
    png_files = app_dir.rglob("**/*.png")

    print(f"Changing curdir to: {this_script_dir.as_posix()}")
    if image_links_dir.exists():
        print("Removing existing images dir")
        os.system(f"rm -rf {image_links_dir.as_posix()}")

    print(f"Creating new symlink dir")
    image_links_dir.mkdir()
    
    print("Creating new symlinks in image dir")
    for png in png_files:
        app_rel_path = png.relative_to(app_dir)
        app_rel_dir = app_rel_path.parent
        links_rel_path = image_links_dir / app_rel_path
        links_rel_dir = image_links_dir / app_rel_dir
        links_rel_dir.mkdir(parents=True, exist_ok=True)
        print(f"\tCreating new symbolic link: {links_rel_path.as_posix()}")
        links_rel_path.symlink_to(png)
    
    print("Complete")

if __name__ == "__main__":
    main()