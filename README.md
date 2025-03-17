- name: Deploy Frontend to EC2
   run: |
      ssh -o StrictHostKeyChecking=no ubuntu@${{ secrets.EC2_PUBLIC_IP }} << 'EOF'
      cd FarmX
      git checkout production
      git pull origin production
      npm install
      npm run build
      # Check if the app is running and stop it if it is
      if pm2 list | grep -q "app-farmx"; then
      pm2 stop app-farmx
      fi
      export PORT=3000
      PORT=3000 pm2 start npm --name "app-farmx" -- start
      pm2 save
      EOF

