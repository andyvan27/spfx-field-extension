import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';

import styles from './LinkFilename.module.scss';

export interface ILinkFilenameProps {
  text: string;
}

const LOG_SOURCE: string = 'LinkFilename';

export default class LinkFilename extends React.Component<ILinkFilenameProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: LinkFilename mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: LinkFilename unmounted');
  }

  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.linkFilename}>
        { this.props.text }
      </div>
    );
  }
}
