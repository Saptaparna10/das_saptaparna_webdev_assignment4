import widgets from '../resources/widgets'
import courses from '../resources/courses.json'

let _singleton = Symbol();

class WidgetServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetServiceClient(_singleton);
        return this[_singleton]
    }

    findAllWidgets() {
      return widgets;
    }

    createWidget(courseId,moduleId,lessonId,topicId,widget) {
        return {
            widgets: [
                ...widgets,
                {
                    type: 'HEADING',
                    text: 'New Widget',
                    size: 1
                }
            ]
        }
    }

    deleteWidget(widgetId,callback) {
        return {
            widgets: widgets.filter(widget => widget.id !== widgetId)
        }
    }

    findWidgetById(widgetId) {
        return fetch(this.createWidgetUrl() + '/' + widgetId,
            {
                method: 'GET'
            }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }

    findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId) {
        return widgets;
    }

    updateWidget(widgetId,widget) {
        return {
            widgets: widgets.map(w =>
                w.id === widgetId ? widget : w
            )
        }
    }

}

export default WidgetServiceClient;
