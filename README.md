# UNSW Data & Knowledge Research Group Website

This repository hosts the homepage for the UNSW Data & Knowledge Research Group. The instructions below guide you through updating personal information on the website.

## Steps to Update Personal Information

1. **Fork the Repository**  
   Start by forking this repository to your GitHub account.

2. **Clone the Forked Repository**  
   Clone the repository to your local machine to make changes:
   ```bash
   git clone https://github.com/your-username/UNSW-database.github.io.git
   cd UNSW-database.github.io
   
3. **Edit the Personal Information File**

- Open `people.html` located in the root directory.
- Add or update your information as needed. You can copy and modify the content already present for other members.

4. **Update or Add Profile Photo**

- Place your profile photo in the `assets` folder.
- Ensure the image file is appropriately named and update the image path in `people.html`.

5. **Commit and Push Changes**
After editing, commit the changes to your forked repository:
```shell
git add people.html assets/your-photo.jpg
git commit -m "Update personal information for [Your Name]"
git push origin main
```

6. **Create a Pull Request**

- Go to the original UNSW Data & Knowledge Research Group repository.
- Create a pull request from your fork, summarizing the changes made.

7. **Review and Approval**
The repository administrators will review your pull request. Once approved, your changes will be merged into the website.
