import os
import shutil

# Sources
src_shifaa = r"C:\Users\zakar\.gemini\antigravity-ide\brain\9a67f4cc-cae8-4a1e-b802-8bf7a2862d8f\shifaa_cover_1782500211450.png"
src_swarm = r"C:\Users\zakar\.gemini\antigravity-ide\brain\9a67f4cc-cae8-4a1e-b802-8bf7a2862d8f\agentic_swarm_cover_1782500223411.png"
src_explorer = r"C:\Users\zakar\.gemini\antigravity-ide\brain\9a67f4cc-cae8-4a1e-b802-8bf7a2862d8f\knowledge_explorer_cover_1782500237393.png"

# Destinations
dest_shifaa_dir = r"c:\Users\zakar\portfolio\public\projects\shifaa"
dest_swarm_dir = r"c:\Users\zakar\portfolio\public\projects\agentic-swarm"
dest_explorer_dir = r"c:\Users\zakar\portfolio\public\projects\knowledge-explorer"

# Create directories if they do not exist
os.makedirs(dest_shifaa_dir, exist_ok=True)
os.makedirs(dest_swarm_dir, exist_ok=True)
os.makedirs(dest_explorer_dir, exist_ok=True)

# Copy
shutil.copy2(src_shifaa, os.path.join(dest_shifaa_dir, "cover.png"))
shutil.copy2(src_swarm, os.path.join(dest_swarm_dir, "cover.png"))
shutil.copy2(src_explorer, os.path.join(dest_explorer_dir, "cover.png"))

print("All cover images copied successfully!")
