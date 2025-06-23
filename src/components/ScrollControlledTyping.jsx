import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import React from "react";
import "../styles/ScrollControlledTyping.css";

const countCharacters = (children) => {
  let count = 0;
  React.Children.forEach(children, (child) => {
    if (typeof child === "string") {
      count += child.length;
    } else if (React.isValidElement(child) && child.props.children) {
      count += countCharacters(child.props.children);
    }
  });
  return count;
};

const renderPartialJsx = (children, maxChars) => {
  let charsCounted = 0;

  const mapChildren = (nodes) => {
    return React.Children.map(nodes, (node) => {
      if (charsCounted >= maxChars) {
        return null;
      }

      if (typeof node === "string") {
        const charsLeft = maxChars - charsCounted;
        if (node.length <= charsLeft) {
          charsCounted += node.length;
          return node;
        } else {
          const partialNode = node.substring(0, charsLeft);
          charsCounted += charsLeft;
          return partialNode;
        }
      }

      if (React.isValidElement(node)) {
        if (node.props.children) {
          const newChildren = mapChildren(node.props.children);
          return React.cloneElement(node, { ...node.props }, newChildren);
        }
        return node;
      }

      return null;
    });
  };

  return mapChildren(children);
};

const ScrollControlledTyping = ({ children, scrollProgress }) => {
  const [displayText, setDisplayText] = useState(null);
  const [totalCharacters, setTotalCharacters] = useState(0);

  useEffect(() => {
    setTotalCharacters(countCharacters(children));
  }, [children]);

  useEffect(() => {
    const charactersToShow = Math.floor(scrollProgress * totalCharacters);
    const newDisplayText = renderPartialJsx(children, charactersToShow);
    setDisplayText(newDisplayText);
  }, [children, scrollProgress, totalCharacters]);

  return (
    <div className="scroll-text">
      {displayText}
      <span className="cursor">|</span>
    </div>
  );
};

ScrollControlledTyping.propTypes = {
  children: PropTypes.node.isRequired,
  scrollProgress: PropTypes.number.isRequired,
};

export default ScrollControlledTyping; 