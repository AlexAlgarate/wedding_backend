source .venv/Scripts/activate
python.exe -m pip install --upgrade pip
pip install -r requirements.txt
rm -fr public
reflex init
reflex export --frontend-only
unzip frontend.zip -d public
rm -f frontend.zip
echo ".web/" > .gitignore
echo "__pycache__/" >> .gitignore
echo ".venv/" >> .gitignore
echo ".env" >> .gitignore
echo ".ruff_cache" >> .gitignore
deactivate