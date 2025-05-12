from pyramid.config import Configurator
from pyramid.static import static_view

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        config.include('.models')
        config.include('.routes')
        config.include('.views')
        config.add_static_view('static', 'pyramid_mahasiswa:static', cache_max_age=3600)
        config.add_route('matakuliah', '/matakuliah')
        config.add_route('matakuliah_detail', '/matakuliah/{id}')

        config.scan()
    return config.make_wsgi_app()
