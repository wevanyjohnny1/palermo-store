import PubSubJS from 'pubsub-js';

export class Events {
  /**
   * Subscribe to a topic and provide a single handler/observer.
   * @param topic The name of the topic to subscribe to.
   * @param observer The observer or callback function to listen when changes are published.
   *
   * @returns Topic Token from which you can unsubscribe to release memory resources and to prevent memory leak.
   */
  public static subscribe(
    topic: string,
    observer: (..._: any[]) => void,
    destroyBeforeSubscribe: boolean = false,
  ): PubSubJS.Token {
    if (destroyBeforeSubscribe) {
      PubSubJS.clearAllSubscriptions(topic);
    }

    return PubSubJS.subscribe(topic, (topicName, data) => {
      observer(data);
    });
  }

  /**
   * Unsubscribe from a topic
   * @param topicToken The topicToken returned in `subscribe`
   */
  public static unsubscribe(
    topicToken: PubSubJS.Token,
  ): PubSubJS.Token | boolean {
    return PubSubJS.unsubscribe(topicToken);
  }

  /**
   * Unsubscribe from a topic
   * @param topicToken The topicToken returned in `subscribe`
   */
  public static getSubscriptions(
    topicToken: PubSubJS.Token,
  ): PubSubJS.Message[] {
    return PubSubJS.getSubscriptions(topicToken);
  }

  /**
   * Publish some data to the subscribers of the given topic.
   * @param topic The name of the topic to emit data to.
   * @param data data in any format to pass on.
   */
  public static publish(topic: string, ...data: any[]): boolean {
    return PubSubJS.publish(topic, data);
  }

  /**
   * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
   * destroy the observable of the topic using this method.
   * @param topic The name of the topic to destroy.
   */
  public static destroy(topic: string): void {
    PubSubJS.clearAllSubscriptions(topic);
  }
}
