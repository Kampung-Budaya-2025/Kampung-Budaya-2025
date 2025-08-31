# 🚀 Checklist Deployment Plesk - Kampung Budaya 2025

## 1. Persiapan File Production
```bash
# Build assets untuk production
npm run build:production

# Optimasi Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan storage:link
```

## 2. Konfigurasi Plesk
- ✅ DocumentRoot harus mengarah ke folder `public/`
- ✅ PHP Version minimal 8.2
- ✅ Node.js tersedia untuk build process

## 3. Environment Variables (.env)
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com
```

## 4. File Permissions
```bash
chmod -R 755 storage/
chmod -R 755 bootstrap/cache/
chmod -R 755 public/build/
```

## 5. Cek File Penting
- ✅ public/build/manifest.json harus ada
- ✅ public/build/assets/ harus berisi file JS/CSS
- ✅ resources/views/app.blade.php sudah diperbaiki
- ✅ vite.config.js sudah diperbaiki

## 6. Debug Whitescreen
1. Buka browser Developer Tools (F12)
2. Cek Console untuk error JavaScript
3. Cek Network tab untuk failed requests
4. Cek apakah manifest.json accessible

## 7. Common Issues & Solutions
### Jika masih whitescreen:
1. **Asset tidak dimuat**: Pastikan path assets benar di manifest.json
2. **React error**: Cek console untuk component errors
3. **Route error**: Pastikan Laravel routes working
4. **Permission error**: Set permissions yang benar

### Test Command
```bash
# Test apakah Laravel berjalan
php artisan route:list

# Test apakah assets ter-build
ls -la public/build/
```

## 8. Monitoring
- Cek Laravel logs: `storage/logs/laravel.log`
- Cek server error logs di Plesk panel
