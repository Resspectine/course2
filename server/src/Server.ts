import { container } from './Config/IoCContainer';
import { registerDependencies } from './Config/IoCConfig';
import app from './Config/App';
import { sequelizeConnection } from './Config/DBConnection';
import { registerRoutes } from './Config/Routing';
import { initModels } from './Config/DBConfig';

registerDependencies(container);

initModels()
    .then(() => {
        sequelizeConnection.authenticate()
            .then(async () => {
                console.log('Connection to database successfully established');

                try {
                    registerRoutes(app, container);
                } catch (error) {
                    console.log(error);
                }

                const server = app.listen(app.get('port'), () => {
                    console.log(
                        'App is running at http://localhost:%d in %s mode',
                        app.get('port'),
                        app.get('env')
                    );
                    console.log('Press CTRL-C to stop\n');

                });
            })
            .catch((error: Error) => {
                console.log(`Error establishing connection to database: ${JSON.stringify(error)}`);
                process.abort();
            });
    })
    .catch((error) => {
        console.log(`Error executing sequelize.sync: ${JSON.stringify(error)}`);
        process.abort();
    });


