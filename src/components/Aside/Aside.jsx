import React from "react";

export const Aside = () => {
  return (
    <div className="aside">
      <button className="btn-add">Add qoutes</button>
      <div className="aside-main">
        <div className="aside-popular-theme">
          <h3>Popular theme</h3>
          <ul>
            <li>First theme</li>
            <li>Second theme</li>
            <li>Threes theme</li>
            <li>For theme</li>
            <li>Five theme</li>
          </ul>
        </div>
        <div className="aside-popular-theme">
          <h3>Another theme</h3>
          <ul>
            <li>First theme</li>
            <li>Second theme</li>
            <li>Threes theme</li>
            <li>For theme</li>
            <li>Five theme</li>
          </ul>
        </div>
        <div className="aside-popular-theme">
          <h3>Other theme</h3>
          <ul>
            <li>First theme</li>
            <li>Second theme</li>
            <li>Threes theme</li>
            <li>For theme</li>
            <li>Five theme</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
