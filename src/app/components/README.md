# What are components?

_(Extracted from [AngularJS Documentation](https://docs.angularjs.org/guide/component))_
In AngularJS, a Component is a special kind of directive that uses a simpler configuration which is suitable for a component-based application structure.

This makes it easier to write an app in a way that's similar to using Web Components or using the new Angular's style of application architecture.

Advantages of Components:
* simpler configuration than plain directives
* promote sane defaults and best practices
* optimized for component-based architecture
* writing component directives will make it easier to upgrade to Angular

When not to use Components:
* for directives that need to perform actions in compile and pre-link functions,because they aren't available
* when you need advanced directive definition options like priority, terminal, multi-element
* when you want a directive that is triggered by an attribute or CSS class, rather than an element

# Where are my controllers?
We are not using controller-views anymore. Using self-sufficient components with views and controllers integrated on them, makes much easier to build/maintain applications and control where the code is.

When you define a component, there you can define a template and its controller (as any other directive), so there is no need of using independent controllers anymore.

An example of a component could be:

```js
// component.js
import myTemplate from './my-template.html';

const MyController = ($scope) => {
  $scope.sayHi = () => console.log('hi');
};

return default {
  controller: MyController,
  template: myTemplate,
};
```

```html
<!-- my-template.html -->
<div class="example">
  <p>Say hi!</p>
</div>
```