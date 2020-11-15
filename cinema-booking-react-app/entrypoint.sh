export API_GATEWAY="${API_GATEWAY:-http://api-gateway:8011}"
envsubst '${API_GATEWAY}' < /nginx.conf.template > /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'