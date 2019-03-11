import * as React from 'react';
import BaseLayout from '../layouts/base';

interface IDevicesViewProps {
    title: string;
}

class DevicesView extends React.Component<IDevicesViewProps> {
    render() {
        return (
            <BaseLayout title={this.props.title}>
                <h2>Index</h2>
                <p>Hello from our DevicesView component!</p>
            </BaseLayout>
        );
    }
}

export default DevicesView;