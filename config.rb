set :css_dir,    'css'
set :js_dir,     'js'
set :images_dir, 'img'

activate :livereload

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
end
