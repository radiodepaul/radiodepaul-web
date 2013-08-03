set :css_dir,    'css'
set :js_dir,     'js'
set :images_dir, 'img'

activate :livereload

helpers do
  def nav_active(page)
    @page_id == page ? {:class => "active"} : {}
  end
end


configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
end
